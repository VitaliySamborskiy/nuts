import { selectRegion } from "./registration/select-region-active.js";
import { getElement } from "./base/get-methods/get-element-dom.js";
import { useInputActive } from "./base/forms-methods/input-active.js";
import { useFormChange } from "./registration/form-change.js";
import { checkboxValidate, useValidate } from "./base/forms-methods/form-validate.js";
import { useNumberMask } from "./base/forms-methods/phone-mask.js";
import { useCreateUser } from "./base/autintificate.js";
import { rendersFormLegal } from "./registration/renders-form.js";
import { useInputClear } from "./base/forms-methods/input-clear.js";
import { useGetImg } from "./base/fire-base-functions/use-img.js";
import { fireBaseService } from "./base/services/fire-base-service.js";
import { select } from "./base/select.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = fireBaseService.getApp();

    await useGetImg("gs://nuts-17b69.appspot.com/avatar.webp", getElement(".registration__input-img"));

    useInputClear(getElement(".input__area", "all"));

    rendersFormLegal(
        getElement(".registration__tab-text", "all"),
        getElement(".registration__legal"),
        getElement(".fop-change"),
    );

    useNumberMask(getElement("phone-form", "id"), "UA", /\+/g, "+380");
    useValidate(
        getElement("registrationForms", "id"),
        getElement(".registration__input", "all"),
        {
            fullName: {
                void: "фио не указано!",
                regExp: "ФИО указано в неверном формате",
            },
            email: {
                void: "не указана электронная почта!",
                regExp: "неправильная почта отсутствует символ @ или неверный домен почты",
            },
            phone: {
                void: "не указан номер телефона",
                regExp: "неверный формат номера телефона",
            },
            city: {
                void: "не указанный город",
                regExp: "Названия городов не должны иметь в себе цифры и другие запрещенные символы",
            },
            password: {
                void: "не ведомый пароль",
                regExp: "пароль должен содержать латинские буквы A-Z, хотя бы одну цифру 0-9 и один специальный символ с #?!@$%^&*-",
            },
            confirmPassword: {
                void: "вы не вели пароль для подтверждения",
                regExp: "пароль должен содержать латинские буквы A-Z, хотя бы одну цифру 0-9 и один специальный символ с #?!@$%^&*-",
                password: "Пароли не совпадают",
            },
            cityLegal: {
                void: "не указан город, где находится юридическое лицо",
                regExp: "Названия городов не должны иметь в себе цифры и другие запрещенные символы",
            },
            photoAvatar: {
                regExp: "Ваш файл не соответствует формату .png, .jpg или .jpeg",
            },
        },
        {
            fullName: /[a-zа-яціїєґ]+/gi,
            email: /[0-9a-zа-яціїєґ\\.]+@(gmail\.com|outlook\.com|hotmail\.com|live\.com)+/gi,
            city: /[a-zа-яціїєґ\\-]+/gi,
            phone: /^\+?[0-9]{1,4}[-\s]?[(]?[0-9]{2,4}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}$/gi,
            password: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gi,
            confirmPassword: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gi,
            cityLegal: /[a-zа-яціїєґ\\-]+/gi,
            photoAvatar: /([a-z0-9а-яціїєґ\s_\\.\-\\(\\):])+(\.png|\.jpg|\.jpeg)$/gi,
        },

        useCreateUser,
        getElement(".registration__text-button"),
        [app, getElement("registrationForms", "id")],
        getElement(".registration__input-img"),
        getElement(".registration__photo-input"),
    );
    checkboxValidate(
        getElement("registrationForms", "id"),
        "agreeCheckbox",
        getElement(".registration__checkbox-box"),

        {
            check: "Вы не подтвердили, что согласны с условиями регистрации",
        },
        getElement(".registration__text-button"),
    );
    select(getElement(".registration__current-country", "all"), getElement(".registration__select-country", "all"));
    select(getElement(".registration__current-region", "all"), getElement(".registration__select-region", "all"));
    selectRegion(
        getElement(".registration__current-country"),
        getElement(".inputs-select__body-wrapper", "all"),
        getElement(".registration__current-region"),
        getElement(".region"),
    );
    useInputActive(getElement(".input__area", "all"), getElement(".input__label", "all"));
    useFormChange(getElement(".registration__tab-text", "all"), getElement(".registration__option-form", "all"));
});
