import{g as e,c as u,d as p,f as h,e as L,a as x,h as E,i as T}from"./main-B8gcuJg5.js";import{u as v}from"./input-active-B2-SbERl.js";import{u as g,b as U,a as w}from"./querry-parameter-BbPXVIy4.js";import{u as k}from"./phone-mask-CVFaa4gg.js";function y(t,s,i,_){new MutationObserver(()=>{if(t.textContent==="Страна")return null;_.classList.remove("registration__select-header-inactive"),s.forEach(a=>{a.classList.remove("select__body")}),s.forEach(a=>{a.dataset.region===t.textContent&&(a.classList.add("select__body"),i.textContent=a.dataset.administrative)})}).observe(t,{childList:!0})}function A(t,s,i){t.forEach(_=>{_.addEventListener("click",()=>{_.getAttribute("data-tab")==="legal"||i.checked===!0?m(s):e(".registration__form-legal").remove()})}),i.addEventListener("change",()=>{i.checked===!0&&m(s)})}function m(t){let s="";s=`<div class="registration__radiobuttons-block">
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
                        </div>`;let i=document.createElement("div");i.classList.add("registration__form-legal"),i.innerHTML=s,t.appendChild(i),v(e(".input__area","all"),e(".input__label","all")),u(e("registrationForms","id"),e(".registration__input","all"),{cityLegal:{void:"не вказане місто де знаходиться юридична особа",regExp:"Назви міст не мають мати цифри в собі та інші заборонені символи"}},{cityLegal:/[a-zа-яціїєґ\\-]+/gi},()=>{},e(".registration__text-button")),p(e(".registration__current-country-legal","all"),e(".registration__select-country-legal","all")),C(e(".registration__tab-text","all"),e(".registration__option-form","all"),e(".fop-change"),e(".registration__change-form","all"),e(".registration__changes","all"),e(".title-change")),p(e(".registration__current-region-legal","all"),e(".registration__select-region-legal","all")),y(e(".registration__current-country-legal"),e(".registration__select-body-wrapper","all"),e(".registration__current-region-legal"),e(".region-legal"))}let b,l={selectedUserTypeHeader:0,selectedUserTypeBody:0,selectedLegalType:"legal"};function B(t,s){t.forEach((_,r)=>{_.addEventListener("click",a=>{a.preventDefault(),c(r,t),n(r,s),l.selectedUserTypeHeader=r,l.selectedUserTypeBody=r,t[1].classList.remove("registration__select-header-inactive-text"),g(["userType","userBody","legalType"],Object.values(l))})}),new URLSearchParams(window.location.search).get("legalType")===null?U(["userType","userBody","legalType"],Object.values(l)):H(l,t,s,b)}function C(t,s,i,_,r,a){b=r,i.checked&&(_[1].checked=!0,d(r,i),l.selectedLegalType=_[1].getAttribute("data-legal-type"),a.textContent="Адрес ФОП",n(1,s),c(0,t),t[1].classList.add("registration__select-header-inactive-text"),l.selectedUserTypeBody=1,l.selectedUserTypeHeader=0,g(["userType","userBody","legalType"],Object.values(l)),i.checked=!1),_.forEach((o,f)=>{o.addEventListener("change",()=>{o.getAttribute("data-legal-type")==="entrepreneur"?(t[1].classList.add("registration__select-header-inactive-text"),c(0,t),a.textContent="Адрес ФОП",l.selectedUserTypeHeader=0,l.selectedUserTypeBody=1):(t[1].classList.remove("registration__select-header-inactive-text"),c(1,t),a.textContent="Юридический адрес",l.selectedUserTypeHeader=1,l.selectedUserTypeBody=1),d(r,o),l.selectedLegalType=_[f].getAttribute("data-legal-type"),g(["userType","userBody","legalType"],Object.values(l))})})}function d(t,s){for(let i of t)i.classList.remove("registration__select-header-inactive"),i.parentElement.querySelector("label").classList.remove("registration__select-header-inactive-text");for(let i of t)(s instanceof HTMLElement?s.getAttribute("data-legal-type"):s)!==i.getAttribute("data-change")&&(i.classList.add("registration__select-header-inactive"),i.parentElement.querySelector("label").classList.add("registration__select-header-inactive-text"))}function c(t,s){for(let i of s)i.classList.remove("registration__tab_active");s[t].classList.add("registration__tab_active")}function n(t,s){for(let i of s)i.classList.remove("registration__body_active");s[t].classList.add("registration__body_active")}function H(t,s,i,_,r){t=w(["selectedUserTypeHeader","selectedUserTypeBody","selectedLegalType"],["userType","userBody","legalType"]),(t.selectedLegalType==="legal"?0:1)===1&&s[1].classList.add("registration__select-header-inactive-text"),+t.selectedUserTypeBody==1&&(m(e(".registration__legal")),c(t.selectedUserTypeHeader,s),n(t.selectedUserTypeBody,i)),c(t.selectedUserTypeHeader,s),n(t.selectedUserTypeBody,i),d(_,t.selectedLegalType)}document.addEventListener("DOMContentLoaded",async function(){const t=h.getApp();L(e(".input__area","all")),x("gs://nuts-17b69.appspot.com/avatar.webp",e(".registration__input-img")),A(e(".registration__tab-text","all"),e(".registration__legal"),e(".fop-change")),u(e("registrationForms","id"),e(".registration__input","all"),{fullName:{void:"фио не вказано!"},email:{void:"не вказана електрона почта!",regExp:"не правильна почта відсутній символ @"},phone:{void:"не вказаний номер телефону",regExp:"не вірний формат номеру телефону"},city:{void:"не вказане місто",regExp:"Назви міст не мають мати цифри в собі та інші заборонені символи"},password:{void:"не ведений пароль",regExp:"пароль має містити латинські літери A-Z, хочаб ону цифру 0-9 та один спеціальний символ з #?!@$%^&*-"},confirmPassword:{void:"ви не вели пароль для підтвердження",regExp:"пароль має містити латинські літери A-Z, хочаб ону цифру 0-9 та один спеціальний символ з #?!@$%^&*-",password:"Паролі не співпадають"},cityLegal:{void:"не вказане місто де знаходиться юридична особа",regExp:"Назви міст не мають мати цифри в собі та інші заборонені символи"},photoAvatar:{void:null,regExp:"Ваш файл не відповідає формату .png, .jpg, або .jpeg"},agreeCheckbox:{void:null,regExp:"null",check:"Ви не підтвердили що згодні з умовами реестрації"}},{email:/[0-9a-zа-яціїєґ\\.\\@]+@[0-9a-zа-яціїєґ\\.]+/gi,city:/[a-zа-яціїєґ\\-]+/gi,phone:/^\+?[0-9]{1,4}[-\s]?[(]?[0-9]{2,4}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}$/gi,password:/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gi,confirmPassword:/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gi,cityLegal:/[a-zа-яціїєґ\\-]+/gi,photoAvatar:/([a-z0-9а-яціїєґ\s_\\.\-\\(\\):])+(\.png|\.jpg|\.jpeg)$/gi},E,e(".registration__text-button"),t,e(".registration__input-img"),e(".registration__photo-input")),T(e("registrationForms","id"),"agreeCheckbox",e(".registration__checkbox-box"),{check:"Ви не підтвердили що згодні з умовами реестрації"},e(".registration__text-button")),y(e(".registration__current-country"),e(".registration__select-body-wrapper","all"),e(".registration__current-region"),e(".region")),k(e("phone","id"),"UA",/\+/g,"+380"),v(e(".input__area","all"),e(".input__label","all")),B(e(".registration__tab-text","all"),e(".registration__option-form","all"))});
