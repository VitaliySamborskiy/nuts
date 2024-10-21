import { useGetImg } from "../base/fire-base-functions/use-img.js";
import { getElement } from "../base/get-methods/get-element-dom.js";
import { useNumberMask } from "../base/forms-methods/phone-mask.js";
import { useInputActive } from "../base/forms-methods/input-active.js";
import { useValidate } from "../base/forms-methods/form-validate.js";
import { getContactInfoUpdate } from "./get-contact-information.js";

export function rendersContactInformation(data, container, app) {
    let html = ``;
    let roleInput = ``;

    roleInput = data.role.company
        ? `<div class="input__block">
                                        <label class="input__label" for="company">
                                            Компания*
                                        </label>
                                        <input
                                            class="personal-cabinet__input input__area"
                                            id="company"
                                            type="text"
                                            name="company"
                                        />
                                    </div>
                                    <div class="input__block">
                                        <label class="input__label" for="сontactPerson">
                                            Контактное лицо*
                                        </label>
                                        <input
                                            class="personal-cabinet__input input__area"
                                            id="сontactPerson"
                                            type="text"
                                            name="сontactPerson"
                                        />
                                    </div>`
        : `<div class="input__block">
                                        <label class="input__label" for="personalInformation">
                                            ФИО*
                                        </label>
                                        <input
                                            class="personal-cabinet__input input__area"
                                            id="personalInformation"
                                            type="text"
                                            name="fullName"
                                        />
                                    </div>`;

    html = ` <form class="personal-cabinet__rename-form" id="renameForm" name="renameForm">
                    <div class="personal-cabinet__rename-block">
                        <div class="personal-cabinet__inputs-text">
                            ${roleInput}
                            <div class="input__block">
                                <label class="input__label" for="email">Email*</label>
                                <input
                                    class="personal-cabinet__input input__area"
                                    id="email"
                                    type="email"
                                    name="email"
                                />
                            </div>
                            <div class="input__block">
                                <label class="input__label" for="phoneNumber">Телефон*</label>
                                <input
                                    class="personal-cabinet__input input__area"
                                    id="phoneNumber"
                                    type="text"
                                    name="phone"
                                />
                            </div>
                        </div>
                        <div class="personal-cabinet__input-photo input-photo__block">
                            <label class="input-photo__label" for="avatar">
                                <img class="input-photo__img personal-cabinet__img" src="" alt="avatar selection" />
                                <span class="personal-cabinet__background-input">
                                    <span class="personal-cabinet__text-input">Изменить фото</span>
                                </span>
                                <input
                                    class="input-photo__input personal-cabinet__input-photo-user personal-cabinet__input"
                                    type="file"
                                    accept="image/jpeg, image/png"
                                    id="avatar"
                                    name="photoAvatar"
                                    aria-label="avatar selection"
                                />
                            </label>
                        </div>
                    </div>
                    <button class="personal-cabinet__save-button green-button">Сохранить</button>
                </form>`;

    container.innerHTML = html;

    if (!data.avatar) {
        useGetImg("gs://nuts-17b69.appspot.com/avatar.webp", getElement(".personal-cabinet__img"));
    } else {
        useGetImg(data.avatar, getElement(".personal-cabinet__img"));
    }

    useNumberMask(getElement("phoneNumber", "id"), "UA", /\+/g, "+380");
    useInputActive(getElement(".input__area", "all"), getElement(".input__label", "all"));
    useValidate(
        getElement("renameForm", "id"),
        getElement(".personal-cabinet__input", "all"),
        {
            company: {
                void: "наазва компанії не вказана",
            },
            сontactPerson: {
                void: "контактну особу не вказано!",
            },
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
            photoAvatar: {
                void: null,
                regExp: "Ваш файл не відповідає формату .png, .jpg, або .jpeg",
            },
        },
        {
            email: /[0-9a-zа-яціїєґ\\.\\@]+@[0-9a-zа-яціїєґ\\.]+/gi,
            phone: /^\+?[0-9]{1,4}[-\s]?[(]?[0-9]{2,4}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}$/gi,
            photoAvatar: /([a-z0-9а-яціїєґ\s_\\.\-\\(\\):])+(\.png|\.jpg|\.jpeg)$/gi,
        },

        getContactInfoUpdate,
        getElement(".personal-cabinet__save-button"),
        [getElement("renameForm", "id"), data, app],
        getElement(".personal-cabinet__img"),
        getElement(".personal-cabinet__input-photo-user"),
    );
}
