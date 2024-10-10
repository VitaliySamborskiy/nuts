import { useInputActive } from "../base/input-active.js";
import { getElement } from "../base/get-element-dom.js";
import { useValidate } from "../base/form-validate.js";

export function renderPasswordForm(container) {
    let html = ``;
    html = `<div class="personal-cabinet__address">
                    <h3 class="personal-cabinet__address-title">Пароль</h3>
                    <form class="personal-cabinet__address-form" id="passwordUserForm">
                        <div class="input__block">
                            <label class="input__label" for="password">Текущий пароль*</label>
                            <input
                                class="personal-cabinet__input input__area"
                                id="password"
                                type="text"
                                name="password"
                            />
                        </div>
                        <div class="input__block">
                            <label class="input__label" for="newPassword">Новый пароль*</label>
                            <input
                                class="personal-cabinet__input input__area"
                                id="newPassword"
                                type="text"
                                name="newPassword"
                            />
                        </div>
                        <div class="input__block">
                            <label class="input__label" for="confirmPassword">Подтвердить пароль*</label>
                            <input
                                class="personal-cabinet__input input__area"
                                id="confirmPassword"
                                type="text"
                                name="confirmPassword"
                            />
                        </div>
                    </form>
                    <button class="green-button personal-cabinet__address-button">Сохранить</button>
                </div>`;

    container.innerHTML = html;

    useInputActive(getElement(".input__area", "all"), getElement(".input__label", "all"));
    useValidate(
        getElement("passwordUserForm", "id"),
        getElement(".personal-cabinet__input", "all"),
        {
            password: {
                void: "не ведений пароль",
                regExp: "пароль має містити латинські літери A-Z, хочаб ону цифру 0-9 та один спеціальний символ з #?!@$%^&*-",
            },

            newPassword: {
                void: "не ведений пароль",
                regExp: "пароль має містити латинські літери A-Z, хочаб ону цифру 0-9 та один спеціальний символ з #?!@$%^&*-",
            },

            confirmPassword: {
                void: "не ведений пароль",
                regExp: "пароль має містити латинські літери A-Z, хочаб ону цифру 0-9 та один спеціальний символ з #?!@$%^&*-",
                password: "Паролі не співпадають",
            },
        },
        {
            password: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gi,
            newPassword: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gi,
            confirmPassword: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gi,
        },

        () => {},
        getElement(".personal-cabinet__address-button"),
    );
}
