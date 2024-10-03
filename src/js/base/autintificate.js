import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { errorAddClass } from "./form-validate.js";
import { getElement } from "./get-element-dom.js";
import { getFormInfo } from "./get-form.js";
import { useRenderUserInfo } from "./header-render-user.js";
import { useGetCookie, useSetCookie } from "./cookies.js";
import { useInputClear } from "./input-clear.js";
import { useGetFirestore, useSetUserData } from "./use-fire-store.js";
import { useSetImg } from "./use-img.js";
import { useGetFormSelects } from "./get-form.js";
import { userService } from "./user-service.js";

let auth;
let userData;
let userInfo = {
    user: null,
    errorCode: null,
    errorMessage: null,
};

function createAuth(app) {
    if (!auth) {
        auth = getAuth(app);
    }
}

export function useLoginUser(app, formLogin, submitButton) {
    createAuth(app);

    submitButton.addEventListener("click", () => {
        let userInfoForm = getFormInfo(formLogin, ["email", "password"]);

        signInWithEmailAndPassword(auth, userInfoForm.email, userInfoForm.password)
            .then((userCredential) => {
                userInfo.user = userCredential.user;
                window.location.pathname = "/nuts/src/pages/personal-cabinet-page.html";
                useRenderUserInfo(userInfo.user, getElement(".header__top-authentication-wrapper"));
                useSetCookie(userInfo.user);
                useInputClear(getElement(".input__area", "all"));
            })
            .catch((err) => {
                const input = getElement("loginPassword", "id");
                errorAddClass(
                    input,
                    "Помилка аундетифікації, перевірте пароль або почту",
                    input.parentElement.querySelector(".error__block"),
                );
            });
    });

    return userInfo;
}

export function useCreateUser(app, formRegistration) {
    createAuth(app);

    let formInformation = getFormInfo(formRegistration, [
        "name",
        "email",
        "phone",
        "city",
        "addresses",
        "password",
        "verifyPassword",
        "avatar",
        "personType",
        "requisites",
        "EDRPOUCode",
        "companyLegalCity",
        "companyLegalAddress",
        "companyLegalIndex",
    ]);

    roleUser(formInformation);
    useGetFormSelects(
        formInformation,
        ["selectCountry", "selectRegion"],
        [".registration__current-country", ".registration__current-region"],
        ["Страна", "Область", "Район", "Воєводство", "Повіт", "Федеральна земля"],
    );
    if (getElement(".registration__form-legal")) {
        useGetFormSelects(
            formInformation,
            ["companyLegalSelectCountry", "companyLegalSelectRegion"],
            [".registration__current-country-legal", ".registration__current-region-legal"],
            ["Страна", "Область", "Район", "Воєводство", "Повіт", "Федеральна земля"],
        );
    }

    delete formInformation.personType;

    console.log(formInformation);

    createUserWithEmailAndPassword(auth, formInformation.email, formInformation.verifyPassword)
        .then(async (userCredential) => {
            await useSetImg(formInformation.avatar)
                .then((res) => {
                    formInformation.avatar = res;
                })
                .catch((err) => {
                    console.log(err);
                    formInformation.avatar = null;
                });
            userInfo.user = userCredential.user;
            await updateProfile(userInfo.user, {
                displayName: formInformation.name,
                photoURL: formInformation.avatar,
                phoneNumber: formInformation.phone,
            });
            await useSetUserData(app, userInfo.user.uid, formInformation);
            window.location.pathname = "/nuts/src/pages/personal-cabinet-page.html";
            useRenderUserInfo(userInfo.user, getElement(".header__top-authentication-wrapper"));
            useSetCookie(userInfo.user);
            useInputClear(getElement(".input__area", "all"));
        })
        .catch((error) => {
            userInfo.errorCode = error.code;
            userInfo.errorMessage = error.message;
        });
}

function roleUser(obj) {
    return (obj.role = {
        person:
            getElement(".registration__tab_active").getAttribute("data-tab") === "individual" &&
            getElement("form-1", "id").classList.contains("registration__body_active"),
        company:
            obj.personType === "legal-form" &&
            getElement(".registration__tab_active").getAttribute("data-tab") === "legal",
        entrepreneur: obj.personType === "fop-form",
    });
}
//testTEST1@

// export async function autoLogin(app) {
//     createAuth(app);
//     const userinfo = useGetCookie("userInfo");
//     console.log(userinfo);
//     const re = userinfo.refreshToken;
//
//     const user = firebase.auth().currentUser;
//
// }

export async function useUserStateChanged(app) {
    createAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            useRenderUserInfo(
                user,
                window.innerWidth >= 768
                    ? getElement(".header__top-authentication-wrapper")
                    : getElement(".burger__authentication"),
            );
            if (userService.getUser() === undefined) {
                useGetFirestore(app, "user")
                    .then((res) => {
                        const userData = res.find((item) => item.email === user.email);
                        userService.setUser(userData);
                    })
                    .catch((err) => {
                        console.error("Error fetching user data:", err);
                    });
            }
        }
    });
}

export function signOutUser() {
    signOut(auth)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        });
}
