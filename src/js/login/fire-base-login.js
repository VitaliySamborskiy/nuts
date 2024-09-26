import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { errorAddClass } from "../base/form-validate.js";
import { getElement } from "../base/get-element-dom.js";
import { getFormInfo } from "../base/get-form.js";
import { useRenderUserInfo } from "../base/header-render-user.js";
import { useSetCookie } from "../base/cookies.js";
import { useInputClear } from "../base/input-clear.js";

export function useLoginUser(app, formLogin, submitButton) {
    const auth = getAuth(app);

    let userInfo = {
        user: null,
        errorCode: null,
        errorMessage: null,
    };

    submitButton.addEventListener("click", () => {
        let userInfoForm = getFormInfo(formLogin, ["email", "password"]);

        signInWithEmailAndPassword(auth, userInfoForm.email, userInfoForm.password)
            .then((userCredential) => {
                userInfo.user = userCredential.user;
                window.location.pathname = "/nuts/src/pages/personal-cabinet-page.html";
                useRenderUserInfo(userInfo.user, getElement(".header__top-authentication-wrapper"));
                useSetCookie(userInfo.user);
                useInputClear(getElement(".input__area", "all"));
                // console.log(userInfo.user);
            })
            .catch((err) => {
                const input = getElement("loginPassword", "id");
                // useInputClear(getElement(".input__area", "all"));
                errorAddClass(
                    input,
                    "Помилка аундетифікації, перевірте пароль або почту",
                    input.parentElement.querySelector(".error__block"),
                );
                // userInfo.errorCode = err.code;
                // userInfo.errorMessage = err.message;
            });
    });

    return userInfo;
}
