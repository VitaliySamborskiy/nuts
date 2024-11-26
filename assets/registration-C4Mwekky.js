import{g as e,s as c,u as b,b as L,c as x,f as T}from"./main-BPgowrMU.js";import{s as E,a as y,u as U}from"./phone-mask-Ds9gQdPx.js";import{u as v,a as m,c as A}from"./form-validate-DIdEAyRC.js";import{u as g,a as k}from"./querry-parameter-8F5Ngxzv.js";function B(t,i,a){t.forEach(l=>{l.addEventListener("click",()=>{l.getAttribute("data-tab")==="legal"||a.checked===!0?p(i):e(".registration__form-legal").remove()})}),a.addEventListener("change",()=>{a.checked===!0&&p(i)})}function p(t){let i="";i=`<div class="registration__radiobuttons-block">
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
                                ${E({body:"registration__select-body",header:"registration__select-header",selectCountry:"registration__select-country-legal",selectRegion:"registration__select-region-legal",currentCountry:"registration__current-country-legal",currentRegion:"registration__current-region-legal",subClass:"region-legal",subBodyClass:"registration__body-wrapper"})}
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
                        </div>`;let a=document.createElement("div");a.classList.add("registration__form-legal"),a.innerHTML=i,t.appendChild(a),v(e(".input__area","all"),e(".input__label","all")),m(e("registrationForms","id"),e(".registration__input","all"),{cityLegal:{void:"не указан город, где находится юридическое лицо",regExp:"Названия городов не должны иметь в себе цифры и другие запрещенные символы"}},{cityLegal:/[a-zа-яціїєґ\\-]+/gi},()=>{},e(".registration__text-button")),w(e(".registration__tab-text","all"),e(".registration__option-form","all"),e(".fop-change"),e(".registration__change-form","all"),e(".registration__changes","all"),e(".title-change")),c(e(".registration__current-country-legal","all"),e(".registration__select-country-legal","all")),c(e(".registration__current-region-legal","all"),e(".registration__select-region-legal","all")),y(e(".registration__current-country-legal"),e(".registration__body-wrapper","all"),e(".registration__current-region-legal"),e(".region-legal"))}let f,r={selectedUserTypeHeader:0,selectedUserTypeBody:0,selectedLegalType:"legal"};function C(t,i){t.forEach((l,s)=>{l.addEventListener("click",n=>{n.preventDefault(),o(s,t),_(s,i),r.selectedUserTypeHeader=s,r.selectedUserTypeBody=s,t[1].classList.remove("registration__select-header-inactive-text"),g(["userType","userBody","legalType"],Object.values(r))})}),new URLSearchParams(window.location.search).get("legalType")===null?g(["userType","userBody","legalType"],Object.values(r)):F(r,t,i,f)}function w(t,i,a,l,s,n){f=s,a.checked&&(l[1].checked=!0,u(s,a),r.selectedLegalType=l[1].getAttribute("data-legal-type"),n.textContent="Адрес ФОП",_(1,i),o(0,t),t[1].classList.add("registration__select-header-inactive-text"),r.selectedUserTypeBody=1,r.selectedUserTypeHeader=0,g(["userType","userBody","legalType"],Object.values(r)),a.checked=!1),l.forEach((d,h)=>{d.addEventListener("change",()=>{d.getAttribute("data-legal-type")==="entrepreneur"?(t[1].classList.add("registration__select-header-inactive-text"),o(0,t),n.textContent="Адрес ФОП",r.selectedUserTypeHeader=0,r.selectedUserTypeBody=1):(t[1].classList.remove("registration__select-header-inactive-text"),o(1,t),n.textContent="Юридический адрес",r.selectedUserTypeHeader=1,r.selectedUserTypeBody=1),u(s,d),r.selectedLegalType=l[h].getAttribute("data-legal-type"),g(["userType","userBody","legalType"],Object.values(r))})})}function u(t,i){for(let a of t)a.classList.remove("registration__select-header-inactive"),a.parentElement.querySelector("label").classList.remove("registration__select-header-inactive-text");for(let a of t)(i instanceof HTMLElement?i.getAttribute("data-legal-type"):i)!==a.getAttribute("data-change")&&(a.classList.add("registration__select-header-inactive"),a.parentElement.querySelector("label").classList.add("registration__select-header-inactive-text"))}function o(t,i){for(let a of i)a.classList.remove("registration__tab_active");i[t].classList.add("registration__tab_active")}function _(t,i){for(let a of i)a.classList.remove("registration__body_active");i[t].classList.add("registration__body_active")}function F(t,i,a,l,s){t=k(["selectedUserTypeHeader","selectedUserTypeBody","selectedLegalType"],["userType","userBody","legalType"]),(t.selectedLegalType==="legal"?0:1)===1&&i[1].classList.add("registration__select-header-inactive-text"),+t.selectedUserTypeBody==1&&(p(e(".registration__legal")),o(t.selectedUserTypeHeader,i),_(t.selectedUserTypeBody,a)),o(t.selectedUserTypeHeader,i),_(t.selectedUserTypeBody,a),u(l,t.selectedLegalType)}document.addEventListener("DOMContentLoaded",async function(){const t=T.getApp();await b("gs://nuts-17b69.appspot.com/avatar.webp",e(".registration__input-img")),L(e(".input__area","all")),B(e(".registration__tab-text","all"),e(".registration__legal"),e(".fop-change")),U(e("phone-form","id"),"UA",/\+/g,"+380"),m(e("registrationForms","id"),e(".registration__input","all"),{fullName:{void:"фио не указано!",regExp:"ФИО указано в неверном формате"},email:{void:"не указана электронная почта!",regExp:"неправильная почта отсутствует символ @ или неверный домен почты"},phone:{void:"не указан номер телефона",regExp:"неверный формат номера телефона"},city:{void:"не указанный город",regExp:"Названия городов не должны иметь в себе цифры и другие запрещенные символы"},password:{void:"не ведомый пароль",regExp:"пароль должен содержать латинские буквы A-Z, хотя бы одну цифру 0-9 и один специальный символ с #?!@$%^&*-"},confirmPassword:{void:"вы не вели пароль для подтверждения",regExp:"пароль должен содержать латинские буквы A-Z, хотя бы одну цифру 0-9 и один специальный символ с #?!@$%^&*-",password:"Пароли не совпадают"},cityLegal:{void:"не указан город, где находится юридическое лицо",regExp:"Названия городов не должны иметь в себе цифры и другие запрещенные символы"},photoAvatar:{regExp:"Ваш файл не соответствует формату .png, .jpg или .jpeg"}},{fullName:/[a-zа-яціїєґ]+/gi,email:/[0-9a-zа-яціїєґ\\.]+@(gmail\.com|outlook\.com|hotmail\.com|live\.com)+/gi,city:/[a-zа-яціїєґ\\-]+/gi,phone:/^\+?[0-9]{1,4}[-\s]?[(]?[0-9]{2,4}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}$/gi,password:/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gi,confirmPassword:/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gi,cityLegal:/[a-zа-яціїєґ\\-]+/gi,photoAvatar:/([a-z0-9а-яціїєґ\s_\\.\-\\(\\):])+(\.png|\.jpg|\.jpeg)$/gi},x,e(".registration__text-button"),[t,e("registrationForms","id")],e(".registration__input-img"),e(".registration__photo-input")),A(e("registrationForms","id"),"agreeCheckbox",e(".registration__checkbox-box"),{check:"Вы не подтвердили, что согласны с условиями регистрации"},e(".registration__text-button")),c(e(".registration__current-country","all"),e(".registration__select-country","all")),c(e(".registration__current-region","all"),e(".registration__select-region","all")),y(e(".registration__current-country"),e(".inputs-select__body-wrapper","all"),e(".registration__current-region"),e(".region")),v(e(".input__area","all"),e(".input__label","all")),C(e(".registration__tab-text","all"),e(".registration__option-form","all"))});
