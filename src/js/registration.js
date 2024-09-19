import { selectRegion } from "./registration/select-region-active.js";
import { getElement } from "./base/get-element-dom.js";
import { useInputActive } from "./registration/input-active.js";
import { useFormChange } from "./registration/form-change.js";
import { checkboxValidate, useValidate } from "./base/form-validate.js";
import { useNumberMask } from "./registration/phone-mask.js";
import { useCreateUser } from "./registration/registration-users.js";
import { setupApp } from "./main.js";
import { rendersFormLegal } from "./registration/renders-form.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = await setupApp();
    rendersFormLegal(
        getElement(".registration__tab-text", "all"),
        getElement(".registration__legal"),
        getElement(".fop-change"),
    );
    useValidate(
        getElement("registrationForms", "id"),
        getElement(".registration__input", "all"),
        {
            fullName: {
                void: "фио не вказано!",
            },
            email: {
                void: "не вказана електрона почта!",
                regExp: "не правильна почта відсутній символ @",
            },
            phone: {
                void: "не вказаний номер телефону",
                regExp: "не вірний формат номеру телефону",
            },
            city: {
                void: "не вказане місто",
                regExp: "Назви міст не мають мати цифри в собі та інші заборонені символи",
            },
            password: {
                void: "не ведений пароль",
                regExp: "пароль має містити латинські літери A-Z, хочаб ону цифру 0-9 та один спеціальний символ з #?!@$%^&*-",
            },
            confirmPassword: {
                void: "ви не вели пароль для підтвердження",
                regExp: "пароль має містити латинські літери A-Z, хочаб ону цифру 0-9 та один спеціальний символ з #?!@$%^&*-",
                password: "Паролі не співпадають",
            },
            cityLegal: {
                void: "не вказане місто де знаходиться юридична особа",
                regExp: "Назви міст не мають мати цифри в собі та інші заборонені символи",
            },
            photoAvatar: {
                void: null,
                regExp: "Ваш файл не відповідає формату .png, .jpg, або .jpeg",
            },
            agreeCheckbox: {
                void: null,
                regExp: "null",
                check: "Ви не підтвердили що згодні з умовами реестрації",
            },
        },
        {
            email: /[0-9a-zа-яціїєґ\\.\\@]+@[0-9a-zа-яціїєґ\\.]+/gi,
            city: /[a-zа-яціїєґ\\-]+/gi,
            phone: /^\+?[0-9]{1,4}[-\s]?[(]?[0-9]{2,4}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}$/gi,
            password: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gi,
            confirmPassword: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gi,
            cityLegal: /[a-zа-яціїєґ\\-]+/gi,
            photoAvatar: /([a-z0-9а-яціїєґ\s_\\.\-\\(\\):])+(\.png|\.jpg|\.jpeg)$/gi,
        },

        useCreateUser,
        getElement(".registration__text-button"),
        app,
    );

    checkboxValidate(
        getElement("registrationForms", "id"),
        "agreeCheckbox",
        getElement(".registration__checkbox-box"),

        {
            check: "Ви не підтвердили що згодні з умовами реестрації",
        },
        getElement(".registration__text-button"),
    );
    selectRegion(
        getElement(".registration__current-country"),
        getElement(".registration__select-body-wrapper", "all"),
        getElement(".registration__current-region"),
        getElement(".region"),
    );
    useNumberMask(getElement("phone", "id"), "UA", /\+/g, "+380");
    useInputActive(getElement(".input__area", "all"), getElement(".input__label", "all"));
    useFormChange(getElement(".registration__tab-text", "all"), getElement(".registration__option-form", "all"));
});
