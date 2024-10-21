import { getElement } from "../base/get-methods/get-element-dom.js";
import { selectRegion } from "./select-region-active.js";
import { select } from "../base/select.js";
import { useRadioInputChange } from "./form-change.js";
import { useInputActive } from "../base/forms-methods/input-active.js";
import { useValidate } from "../base/forms-methods/form-validate.js";
import { selectsFormRenders } from "../base/renders-methods/renders-selection-form.js";

export function rendersFormLegal(buttons, container, checkbox) {
    buttons.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.getAttribute("data-tab") === "legal" || checkbox.checked === true) {
                renderForm(container);
            } else {
                getElement(".registration__form-legal").remove();
            }
        });
    });

    checkbox.addEventListener("change", () => {
        if (checkbox.checked === true) {
            renderForm(container);
        }
    });
}

export function renderForm(container) {
    let html = ``;
    html = `<div class="registration__radiobuttons-block">
                            <label class="radio registration__radiobutton-radio">
                                <input
                                    class="registration__change-form"
                                    data-legal-type="legal"
                                    name="changeForms"
                                    type="radio"
                                    value="legal-form"
                                    checked
                                />
                                <span class="registration__radiobutton-text">Юр. лицо</span>
                            </label>
                            <label class="radio registration__radiobutton-radio">
                                <input
                                    class="registration__change-form"
                                    data-legal-type="entrepreneur"
                                    name="changeForms"
                                    type="radio"
                                    value="fop-form"
                                />
                                <span class="registration__radiobutton-text">ФОП</span>
                            </label>
                        </div>
                        <div class="registration__option-sub-form hidden registration__body_active" id="legalForm">
                            <div class="registration__details-block">
                                <h3 class="registration__sub-title">1. Реквизиты</h3>
                                <div class="registration__form">
                                    <div class="input__block">
                                        <label class="input__label" for="details">ОКПО</label>
                                        <input
                                            class="registration__input input__area registration__changes"
                                            data-change="legal"
                                            id="details"
                                            type="text"
                                            name="requisites"
                                        />
                                    </div>
                                    <div class="input__block">
                                        <label
                                            class="input__label registration__select-header-inactive-text"
                                            for="EDRPOUCode"
                                            >ЕДРПО</label
                                        >
                                        <input
                                            class="registration__input input__area registration__changes registration__select-header-inactive"
                                            data-change="entrepreneur"
                                            id="EDRPOUCode"
                                            name="EDRPOUCode"
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="registration__details-legal">
                                <h3 class="registration__sub-title">
                                    2. <span class="title-change">Юридический адрес</span>
                                </h3>
                                <div class="registration__form">
                                ${selectsFormRenders({
                                    body: "registration__select-body",
                                    header: "registration__select-header",
                                    selectCountry: "registration__select-country-legal",
                                    selectRegion: "registration__select-region-legal",
                                    currentCountry: "registration__current-country-legal",
                                    currentRegion: "registration__current-region-legal",
                                    subClass: "region-legal",
                                    subBodyClass: "registration__body-wrapper",
                                })}
                                    <div class="input__block">
                                        <label class="input__label" for="city-legal">Город*</label>
                                        <input
                                            class="registration__input input__area"
                                            id="city-legal"
                                            type="text"
                                            name="cityLegal"
                                        />
                                    </div>
                                    <div class="input__block">
                                        <label class="input__label" for="addresses-legal">Адрес</label>
                                        <input
                                            class="registration__input input__area"
                                            id="addresses-legal"
                                            type="text"
                                            name="addressesLegal"
                                        />
                                    </div>
                                    <div class="input__block">
                                        <label class="input__label" for="index-legal">Индекс</label>
                                        <input
                                            class="registration__input input__area registration__changes"
                                            data-change="legal"
                                            id="index-legal"
                                            type="text"
                                            name="indexLegal"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>`;
    let div = document.createElement("div");
    div.classList.add("registration__form-legal");
    div.innerHTML = html;
    container.appendChild(div);
    useInputActive(getElement(".input__area", "all"), getElement(".input__label", "all"));
    useValidate(
        getElement("registrationForms", "id"),
        getElement(".registration__input", "all"),
        {
            cityLegal: {
                void: "не вказане місто де знаходиться юридична особа",
                regExp: "Назви міст не мають мати цифри в собі та інші заборонені символи",
            },
        },
        {
            cityLegal: /[a-zа-яціїєґ\\-]+/gi,
        },
        () => {},
        getElement(".registration__text-button"),
    );
    useRadioInputChange(
        getElement(".registration__tab-text", "all"),
        getElement(".registration__option-form", "all"),
        getElement(".fop-change"),
        getElement(".registration__change-form", "all"),
        getElement(".registration__changes", "all"),
        getElement(".title-change"),
    );
    select(
        getElement(".registration__current-country-legal", "all"),
        getElement(".registration__select-country-legal", "all"),
    );
    select(
        getElement(".registration__current-region-legal", "all"),
        getElement(".registration__select-region-legal", "all"),
    );
    selectRegion(
        getElement(".registration__current-country-legal"),
        getElement(".registration__body-wrapper", "all"),
        getElement(".registration__current-region-legal"),
        getElement(".region-legal"),
    );
}
