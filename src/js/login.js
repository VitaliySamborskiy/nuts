import { useInputActive } from "./registration/input-active.js";
import { getElement } from "./base/get-element-dom.js";
import { setupApp } from "./main.js";
import { useLoginUser } from "./login/fire-base-login.js";
import { useValidate } from "./base/form-validate.js";
import { useInputClear } from "./base/input-clear.js";

document.addEventListener("DOMContentLoaded", async function () {
    useInputClear(getElement(".input__area", "all"));
    const app = await setupApp();
    useInputActive(getElement(".input__area", "all"), getElement(".input__label", "all"));
    const user = useLoginUser(app, getElement(".login__form"), getElement(".login__button"));
    useValidate(
        getElement("loginForm", "id"),
        getElement(".login__input", "all"),
        {
            loginEmail: {
                void: "не вказана електрона почта!",
                regExp: "не правильна почта відсутній символ @",
            },
            loginPassword: {
                void: "поле не заповнене",
            },
        },
        {
            loginEmail: /[0-9a-zа-яціїєґ\\.\\@]+@[0-9a-zа-яціїєґ\\.]+/gi,
        },
        () => {},
        getElement(".login__button"),
    );
});
