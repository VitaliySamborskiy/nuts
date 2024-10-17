import { selectRegion } from "./registration/select-region-active.js";
import { getElement } from "./base/get-element-dom.js";
import { useInputActive } from "./base/input-active.js";
import { useFormChange } from "./registration/form-change.js";
import { checkboxValidate, useValidate } from "./base/form-validate.js";
import { useNumberMask } from "./base/phone-mask.js";
import { useCreateUser } from "./base/autintificate.js";
import { rendersFormLegal } from "./registration/renders-form.js";
import { useInputClear } from "./base/input-clear.js";
import { useGetImg } from "./base/fire-base-functions/use-img.js";
import { fireBaseService } from "./base/services/fire-base-service.js";
import { select } from "./base/select.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = fireBaseService.getApp();
    useInputClear(getElement(".input__area", "all"));

    useGetImg("gs://nuts-17b69.appspot.com/avatar.webp", getElement(".registration__input-img"));

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
        getElement(".registration__input-img"),
        getElement(".registration__photo-input"),
        [app, getElement("registrationForms", "id")],
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
    select(getElement(".registration__current-country", "all"), getElement(".registration__select-country", "all"));
    select(getElement(".registration__current-region", "all"), getElement(".registration__select-region", "all"));
    selectRegion(
        getElement(".registration__current-country"),
        getElement(".inputs-select__body-wrapper", "all"),
        getElement(".registration__current-region"),
        getElement(".region"),
    );
    useNumberMask(getElement("phone", "id"), "UA", /\+/g, "+380");
    useInputActive(getElement(".input__area", "all"), getElement(".input__label", "all"));
    useFormChange(getElement(".registration__tab-text", "all"), getElement(".registration__option-form", "all"));
});
