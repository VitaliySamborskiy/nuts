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
                void: "не указана электронная почта!",
                regExp: "неверная почта отсутствует символ @ или неверный домен почты",
            },
            loginPassword: {
                void: "поле не заполнено",
                regExp: "пароль должен содержать латинские буквы A-Z, хотя бы одну цифру 0-9 и один специальный символ с #?!@$%^&*-",
            },
        },
        {
            loginEmail: /[0-9a-zа-яціїєґ\\.]+@(gmail\.com|outlook\.com|hotmail\.com|live\.com)+/gi,
            loginPassword: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gi,
        },
        useLoginUser,
        getElement(".login__button"),
        [app, getElement(".login__form")],
    );
});
