import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { errorAddClass } from "../base/form-validate.js";
import { getElement } from "../base/get-element-dom.js";
import { getFormInfo } from "../base/get-form.js";

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
                console.log(userInfo.user);
            })
            .catch((err) => {
                const input = getElement("loginPassword", "id");
                errorAddClass(
                    input,
                    "Помилка аундетифікації, перевірте пароль або почту",
                    input.parentElement.querySelector(".error__block"),
                );
                userInfo.errorCode = err.code;
                userInfo.errorMessage = err.message;
            });
    });

    return userInfo;
}
