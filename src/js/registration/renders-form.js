import { getElement } from "../base/get-element-dom.js";
import { selectRegion } from "./select-region-active.js";
import { select } from "../base/select.js";
import { useRadioInputChange } from "./form-change.js";
import { useInputActive } from "../base/input-active.js";
import { useValidate } from "../base/form-validate.js";
import { setupApp } from "../main.js";

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
                                    <div class="select registration__select-country-legal">
                                        <div class="registration__select-header select__header">
                                            <span class="select__current registration__current-country-legal"
                                                >Страна</span
                                            >
                                            <svg class="select__svg registration__select-svg">
                                                <use href="#arrow_down"></use>
                                            </svg>
                                        </div>
                                        <ul class="select__body registration__select-body">
                                            <li class="select__item registration__item">Україна</li>
                                            <li class="select__item registration__item">Молдова</li>
                                            <li class="select__item registration__item">Польща</li>
                                            <li class="select__item registration__item">Румунія</li>
                                            <li class="select__item registration__item">Німеччина</li>
                                        </ul>
                                    </div>
                                    <div class="select registration__select-region-legal">
                                        <div
                                            class="region-legal registration__select-header registration__select-header-inactive select__header"
                                        >
                                            <span class="select__current registration__current-region-legal"
                                                >Область</span
                                            >
                                            <svg class="select__svg registration__select-svg">
                                                <use href="#arrow_down"></use>
                                            </svg>
                                        </div>
                                        <ul
                                            class="hidden select__body registration__select-body registration__select-body-wrapper"
                                            data-region="Україна"
                                            data-administrative="Область"
                                        >
                                            <li class="select__item registration__item">Вінницька область</li>
                                            <li class="select__item registration__item">Волинська область</li>
                                            <li class="select__item registration__item">Дніпропетровська область</li>
                                            <li class="select__item registration__item">Донецька область</li>
                                            <li class="select__item registration__item">Житомирська область</li>
                                            <li class="select__item registration__item">Закарпатська область</li>
                                            <li class="select__item registration__item">Запорізька область</li>
                                            <li class="select__item registration__item">Івано-Франківська область</li>
                                            <li class="select__item registration__item">Київська область</li>
                                            <li class="select__item registration__item">Кіровоградська область</li>
                                            <li class="select__item registration__item">Луганська область</li>
                                            <li class="select__item registration__item">Львівська область</li>
                                            <li class="select__item registration__item">Миколаївська область</li>
                                            <li class="select__item registration__item">Одеська область</li>
                                            <li class="select__item registration__item">Полтавська область</li>
                                            <li class="select__item registration__item">Рівненська область</li>
                                            <li class="select__item registration__item">Сумська область</li>
                                            <li class="select__item registration__item">Тернопільська область</li>
                                            <li class="select__item registration__item">Харківська область</li>
                                            <li class="select__item registration__item">Херсонська область</li>
                                            <li class="select__item registration__item">Хмельницька область</li>
                                            <li class="select__item registration__item">Черкаська область</li>
                                            <li class="select__item registration__item">Чернівецька область</li>
                                            <li class="select__item registration__item">Чернігівська область</li>
                                            <li class="select__item registration__item">Автономна Республіка Крим</li>
                                            <li class="select__item registration__item">м. Київ</li>
                                            <li class="select__item registration__item">м. Севастополь</li>
                                        </ul>

                                        <ul
                                            class="hidden select__body registration__select-body registration__select-body-wrapper"
                                            data-region="Молдова"
                                            data-administrative="Район"
                                        >
                                            <li class="select__item registration__item">Анений Ной</li>
                                            <li class="select__item registration__item">Басарабяска</li>
                                            <li class="select__item registration__item">Бричани</li>
                                            <li class="select__item registration__item">Бєльці</li>
                                            <li class="select__item registration__item">Кагул</li>
                                            <li class="select__item registration__item">Кантемир</li>
                                            <li class="select__item registration__item">Каларяш</li>
                                            <li class="select__item registration__item">Чимішлія</li>
                                            <li class="select__item registration__item">Кріулень</li>
                                            <li class="select__item registration__item">Дондюшани</li>
                                            <li class="select__item registration__item">Дубесарь</li>
                                            <li class="select__item registration__item">Єдинець</li>
                                            <li class="select__item registration__item">Фалешть</li>
                                            <li class="select__item registration__item">Флорешть</li>
                                            <li class="select__item registration__item">Глодяни</li>
                                            <li class="select__item registration__item">Хинчешть</li>
                                            <li class="select__item registration__item">Єлова</li>
                                            <li class="select__item registration__item">Яловень</li>
                                            <li class="select__item registration__item">Кагул</li>
                                            <li class="select__item registration__item">Кантарь</li>
                                            <li class="select__item registration__item">Кахул</li>
                                            <li class="select__item registration__item">Кишинів</li>
                                            <li class="select__item registration__item">Леова</li>
                                            <li class="select__item registration__item">Ніспорень</li>
                                            <li class="select__item registration__item">Окниця</li>
                                            <li class="select__item registration__item">Орхей</li>
                                            <li class="select__item registration__item">Резина</li>
                                            <li class="select__item registration__item">Ришкань</li>
                                            <li class="select__item registration__item">Сорока</li>
                                            <li class="select__item registration__item">Шолданешть</li>
                                            <li class="select__item registration__item">Штефан-Воде</li>
                                            <li class="select__item registration__item">Страшень</li>
                                            <li class="select__item registration__item">Сундер</li>
                                            <li class="select__item registration__item">Тараклія</li>
                                            <li class="select__item registration__item">Теленешть</li>
                                            <li class="select__item registration__item">Унгень</li>
                                            <li class="select__item registration__item">Гагаузія</li>
                                        </ul>

                                        <ul
                                            class="hidden select__body registration__select-body registration__select-body-wrapper"
                                            data-region="Польща"
                                            data-administrative="Воєводство"
                                        >
                                            <li class="select__item registration__item">Нижньосілезьке воєводство</li>
                                            <li class="select__item registration__item">
                                                Куявсько-Поморське воєводство
                                            </li>
                                            <li class="select__item registration__item">Люблінське воєводство</li>
                                            <li class="select__item registration__item">Любуське воєводство</li>
                                            <li class="select__item registration__item">Лодзьке воєводство</li>
                                            <li class="select__item registration__item">Малопольське воєводство</li>
                                            <li class="select__item registration__item">Мазовецьке воєводство</li>
                                            <li class="select__item registration__item">Опольське воєводство</li>
                                            <li class="select__item registration__item">Підкарпатське воєводство</li>
                                            <li class="select__item registration__item">Підляське воєводство</li>
                                            <li class="select__item registration__item">Поморське воєводство</li>
                                            <li class="select__item registration__item">Сілезьке воєводство</li>
                                            <li class="select__item registration__item">Свентокшиське воєводство</li>
                                            <li class="select__item registration__item">
                                                Вармінсько-Мазурське воєводство
                                            </li>
                                            <li class="select__item registration__item">Великопольське воєводство</li>
                                            <li class="select__item registration__item">Західнопоморське воєводство</li>
                                        </ul>

                                        <ul
                                            class="hidden select__body registration__select-body registration__select-body-wrapper"
                                            data-region="Румунія"
                                            data-administrative="Повіт"
                                        >
                                            <li class="select__item registration__item">Алба повіт</li>
                                            <li class="select__item registration__item">Арад повіт</li>
                                            <li class="select__item registration__item">Аргеш повіт</li>
                                            <li class="select__item registration__item">Бакеу повіт</li>
                                            <li class="select__item registration__item">Біхор повіт</li>
                                            <li class="select__item registration__item">Бистриця-Несеуд повіт</li>
                                            <li class="select__item registration__item">Ботошань повіт</li>
                                            <li class="select__item registration__item">Брашов повіт</li>
                                            <li class="select__item registration__item">Бреїла повіт</li>
                                            <li class="select__item registration__item">Бухарест муніципій</li>
                                            <li class="select__item registration__item">Бузеу повіт</li>
                                            <li class="select__item registration__item">Караш-Северін повіт</li>
                                            <li class="select__item registration__item">Келераш повіт</li>
                                            <li class="select__item registration__item">Клуж повіт</li>
                                            <li class="select__item registration__item">Констанца повіт</li>
                                            <li class="select__item registration__item">Ковасна повіт</li>
                                            <li class="select__item registration__item">Димбовіца повіт</li>
                                            <li class="select__item registration__item">Долж повіт</li>
                                            <li class="select__item registration__item">Галац повіт</li>
                                            <li class="select__item registration__item">Джурджу повіт</li>
                                            <li class="select__item registration__item">Горж повіт</li>
                                            <li class="select__item registration__item">Харгіта повіт</li>
                                            <li class="select__item registration__item">Хунедоара повіт</li>
                                            <li class="select__item registration__item">Яломіца повіт</li>
                                            <li class="select__item registration__item">Ясси повіт</li>
                                            <li class="select__item registration__item">Ілфов повіт</li>
                                            <li class="select__item registration__item">Марамуреш повіт</li>
                                            <li class="select__item registration__item">Мехедінць повіт</li>
                                            <li class="select__item registration__item">Муреш повіт</li>
                                            <li class="select__item registration__item">Нямц повіт</li>
                                            <li class="select__item registration__item">Олт повіт</li>
                                            <li class="select__item registration__item">Прахова повіт</li>
                                            <li class="select__item registration__item">Селаж повіт</li>
                                            <li class="select__item registration__item">Сату-Маре повіт</li>
                                            <li class="select__item registration__item">Сібіу повіт</li>
                                            <li class="select__item registration__item">Сучава повіт</li>
                                            <li class="select__item registration__item">Телеорман повіт</li>
                                            <li class="select__item registration__item">Тіміш повіт</li>
                                            <li class="select__item registration__item">Тулча повіт</li>
                                            <li class="select__item registration__item">Вилча повіт</li>
                                            <li class="select__item registration__item">Васлуй повіт</li>
                                            <li class="select__item registration__item">Вранча повіт</li>
                                        </ul>

                                        <ul
                                            class="hidden select__body registration__select-body registration__select-body-wrapper"
                                            data-region="Німеччина"
                                            data-administrative="Федеральна земля"
                                        >
                                            <li class="select__item registration__item">Баден-Вюртемберг</li>
                                            <li class="select__item registration__item">Баварія</li>
                                            <li class="select__item registration__item">Берлін</li>
                                            <li class="select__item registration__item">Бранденбург</li>
                                            <li class="select__item registration__item">Бремен</li>
                                            <li class="select__item registration__item">Гамбург</li>
                                            <li class="select__item registration__item">Гессен</li>
                                            <li class="select__item registration__item">
                                                Мекленбург-Передня Померанія
                                            </li>
                                            <li class="select__item registration__item">Нижня Саксонія</li>
                                            <li class="select__item registration__item">Північний Рейн-Вестфалія</li>
                                            <li class="select__item registration__item">Рейнланд-Пфальц</li>
                                            <li class="select__item registration__item">Саксонія</li>
                                            <li class="select__item registration__item">Саксонія-Ангальт</li>
                                            <li class="select__item registration__item">Шлезвіг-Гольштейн</li>
                                            <li class="select__item registration__item">Тюрінгія</li>
                                        </ul>
                                    </div>
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
    select(
        getElement(".registration__current-country-legal", "all"),
        getElement(".registration__select-country-legal", "all"),
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
        getElement(".registration__current-region-legal", "all"),
        getElement(".registration__select-region-legal", "all"),
    );
    selectRegion(
        getElement(".registration__current-country-legal"),
        getElement(".registration__select-body-wrapper", "all"),
        getElement(".registration__current-region-legal"),
        getElement(".region-legal"),
    );
}
