import { useInputActive } from "./base/forms-methods/input-active.js";
import { getElement } from "./base/get-methods/get-element-dom.js";
import { useLoginUser } from "./base/autintificate.js";
import { useValidate } from "./base/forms-methods/form-validate.js";
import { useInputClear } from "./base/forms-methods/input-clear.js";
import { fireBaseService } from "./base/services/fire-base-service.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = fireBaseService.getApp();
    useInputClear(getElement(".input__area", "all"));
    useInputActive(getElement(".input__area", "all"), getElement(".input__label", "all"));

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
        useLoginUser,
        getElement(".login__button"),
        [app, getElement(".login__form")],
    );
});
