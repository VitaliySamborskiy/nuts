import { useInputActive } from "../base/input-active.js";
import { getElement } from "../base/get-element-dom.js";
import { selectRegion } from "../registration/select-region-active.js";
import { useValidate } from "../base/form-validate.js";
import { select } from "../base/select.js";
import { selectsFormRenders } from "../base/renders-selection-form.js";
import { useGetImg } from "../base/use-img.js";

export function rendersAddressForm(container, button, data) {
    button.addEventListener("click", () => {
        data.role.company ? renderAddressFormCompanion(container) : renderAddressFormPerson(container);
        formFunctionActivate();
    });
}

function renderAddressFormPerson(container) {
    let html = ``;
    html = ` <div class="personal-cabinet__address">
                    <h3 class="personal-cabinet__address-title">Адрес</h3>
                    <form class="personal-cabinet__address-form" id="addressUserForm">
                    ${selectsFormRenders()}                
                        <div class="input__block">
                            <label class="input__label" for="city">Город*</label>
                            <input class="personal-cabinet__input input__area" id="city" type="text" name="city" />
                        </div>
                        <div class="input__block">
                            <label class="input__label" for="addresses">Адрес</label>
                            <input
                                class="personal-cabinet__input input__area"
                                id="addresses"
                                type="text"
                                name="addresses"
                            />
                        </div>
                    </form>
                    <button class="green-button personal-cabinet__address-button">Сохранить</button>
                </div>`;

    container.innerHTML = html;
}

function renderAddressFormCompanion(container) {
    let html = ``;
    html = ` <div class="personal-cabinet__address-section-legal">
                    <form class="personal-cabinet__address-legal" id="addressUserLegalForm">
                        <div class="personal-cabinet__address-legal-sub-form-short">
                            <h3 class="personal-cabinet__address-title">1. Реквизиты</h3>
                            <div class="input__block">
                                <label class="input__label" for="requisites">ОКПО</label>
                                <input
                                    class="personal-cabinet__input input__area"
                                    id="requisites"
                                    type="text"
                                    name="requisites"
                                />
                            </div>
                        </div>
                        <div class="personal-cabinet__address-legal-sub-form">
                            <h3 class="personal-cabinet__address-title">2. Адрес</h3>
                            <div class="personal-cabinet__address-form">
                            ${selectsFormRenders()}
                                <div class="input__block">
                                    <label class="input__label" for="city">Город*</label>
                                    <input
                                        class="personal-cabinet__input input__area"
                                        id="city"
                                        type="text"
                                        name="city"
                                    />
                                </div>
                                <div class="input__block">
                                    <label class="input__label" for="addresses">Адрес</label>
                                    <input
                                        class="personal-cabinet__input input__area"
                                        id="addresses"
                                        type="text"
                                        name="addresses"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="personal-cabinet__address-legal-sub-form">
                            <h3 class="personal-cabinet__address-title">3. Юридический адрес</h3>
                            <div class="personal-cabinet__address-form">
                                ${selectsFormRenders({
                                    body: "personal-cabinet__select-body",
                                    header: "personal-cabinet__select-header",
                                    selectCountry: "personal-cabinet__select-country-legal",
                                    selectRegion: "personal-cabinet__select-region-legal",
                                    currentCountry: "personal-cabinet__current-country-legal",
                                    currentRegion: "personal-cabinet__current-region-legal",
                                    subClass: "region-legal",
                                    subBodyClass: "personal-cabinet__body-wrapper",
                                })}
                                <div class="input__block">
                                    <label class="input__label" for="cityLegal">Город*</label>
                                    <input
                                        class="personal-cabinet__input input__area"
                                        id="cityLegal"
                                        type="text"
                                        name="city"
                                    />
                                </div>
                                <div class="input__block">
                                    <label class="input__label" for="addressesLegal">Адрес</label>
                                    <input
                                        class="personal-cabinet__input input__area"
                                        id="addressesLegal"
                                        type="text"
                                        name="addressesLegal"
                                    />
                                </div>
                                <div class="input__block">
                                    <label class="input__label" for="indexLegal">Индекс</label>
                                    <input
                                        class="personal-cabinet__input input__area"
                                        id="indexLegal"
                                        type="text"
                                        name="indexLegal"
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            class="green-button personal-cabinet__address-button personal-cabinet__address-legal-button"
                        >
                            Сохранить
                        </button>
                    </form>
                    <div class="personal-cabinet__address-img-block">
                        <picture class="personal-cabinet__address-picture">
                            <img class="personal-cabinet__address-img" src="" alt="nuts tree" />
                        </picture>
                        <div class="personal-cabinet__address-background"></div>
                        <div class="personal-cabinet__address-img-text-block">
                            <h2 class="personal-cabinet__address-img-title">Орех Причерноморья</h2>
                            <p class="personal-cabinet__address-img-text">
                                Единственный в Украине сад совместного выращивания фундука и грецкого ореха
                            </p>
                        </div>
                    </div>
                </div>`;

    container.innerHTML = html;

    useGetImg(
        "gs://nuts-17b69.appspot.com/personal-cabinet/personal-cabinet.webp",
        getElement(".personal-cabinet__address-img"),
    );
}

function formFunctionActivate() {
    useInputActive(getElement(".input__area", "all"), getElement(".input__label", "all"));
    useValidate(
        getElement("addressUserForm", "id"),
        getElement(".personal-cabinet__input", "all"),
        {
            city: {
                void: "не вказане місто",
                regExp: "Назви міст не мають мати цифри в собі та інші заборонені символи",
            },
        },
        {
            city: /[a-zа-яціїєґ\\-]+/gi,
        },

        () => {},
        getElement(".personal-cabinet__address-button"),
    );

    select(getElement(".registration__current-country", "all"), getElement(".registration__select-country", "all"));
    select(getElement(".registration__current-region", "all"), getElement(".registration__select-region", "all"));

    selectRegion(
        getElement(".registration__current-country"),
        getElement(".inputs-select__body-wrapper", "all"),
        getElement(".registration__current-region"),
        getElement(".region"),
    );

    select(
        getElement(".personal-cabinet__current-country-legal", "all"),
        getElement(".personal-cabinet__select-country-legal", "all"),
    );
    select(
        getElement(".personal-cabinet__current-region-legal", "all"),
        getElement(".personal-cabinet__select-region-legal", "all"),
    );
    selectRegion(
        getElement(".personal-cabinet__current-country-legal"),
        getElement(".personal-cabinet__body-wrapper", "all"),
        getElement(".personal-cabinet__current-region-legal"),
        getElement(".region-legal"),
    );
}
