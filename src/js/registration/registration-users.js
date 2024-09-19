import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFormInfo, useGetFormSelects } from "../base/get-form.js";
import { useSetUserData } from "../base/use-fire-store.js";
import { useSetImg } from "../base/use-img.js";
import { getElement } from "../base/get-element-dom.js";

export function useCreateUser(app, formRegistration) {
    const auth = getAuth(app);

    let userInfo = {
        user: null,
        errorCode: null,
        errorMessage: null,
    };

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
            console.log(userInfo.user);
        })
        .catch((error) => {
            userInfo.errorCode = error.code;
            userInfo.errorMessage = error.message;
            console.log(error.message);
            console.log(error.message);
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
