import{a as l,g as a,c as p,f as r,k as c,e as _}from"./main-B8gcuJg5.js";import{u}from"./phone-mask-CVFaa4gg.js";import{u as b}from"./input-active-B2-SbERl.js";function m(e,n,i,t){e.addEventListener("click",()=>{n.classList.add(t)}),i.addEventListener("click",()=>{n.classList.remove(t)})}function d(e){e.forEach(n=>{n.addEventListener("click",i=>{e.forEach(t=>{t.classList.remove("personal-cabinet__link_active")}),i.currentTarget.classList.add("personal-cabinet__link_active")})})}function v(e,n,i,t){i.addEventListener("click",()=>{let s="",o="";o=e.role.company?`<div class="input__block">
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
                                    </div>`:`<div class="input__block">
                                        <label class="input__label" for="personalInformation">
                                            ФИО*
                                        </label>
                                        <input
                                            class="personal-cabinet__input input__area"
                                            id="personalInformation"
                                            type="text"
                                            name="fullName"
                                        />
                                    </div>`,s=` <form class="personal-cabinet__rename-form" id="renameForm" name="renameForm">
                    <div class="personal-cabinet__rename-block">
                        <div class="personal-cabinet__inputs-text">
                            ${o}
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
                                <label class="input__label" for="phone">Телефон*</label>
                                <input
                                    class="personal-cabinet__input input__area"
                                    id="phone"
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
                </form>`,n.innerHTML=s,e.avatar?l(e.avatar,a(".personal-cabinet__img")):l("gs://nuts-17b69.appspot.com/avatar.webp",a(".personal-cabinet__img")),u(a("phone","id"),"UA",/\+/g,"+380"),b(a(".input__area","all"),a(".input__label","all")),p(a("renameForm","id"),a(".personal-cabinet__input","all"),{company:{void:"наазва компанії не вказана"},сontactPerson:{void:"контактну особу не вказано!"},fullName:{void:"фио не вказано!"},email:{void:"не вказана електрона почта!",regExp:"не правильна почта відсутній символ @"},phone:{void:"не вказаний номер телефону",regExp:"не вірний формат номеру телефону"},photoAvatar:{void:null,regExp:"Ваш файл не відповідає формату .png, .jpg, або .jpeg"}},{email:/[0-9a-zа-яціїєґ\\.\\@]+@[0-9a-zа-яціїєґ\\.]+/gi,phone:/^\+?[0-9]{1,4}[-\s]?[(]?[0-9]{2,4}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}$/gi,photoAvatar:/([a-z0-9а-яціїєґ\s_\\.\-\\(\\):])+(\.png|\.jpg|\.jpeg)$/gi},()=>{},a(".personal-cabinet__save-button"),t,a(".personal-cabinet__img"),a(".personal-cabinet__input-photo-user"))})}document.addEventListener("DOMContentLoaded",async function(){const e=r.getApp();l("gs://nuts-17b69.appspot.com/avatar.webp",a(".personal-cabinet__img")),setTimeout(()=>{let n=c.getUser();console.log(n),v(n,a(".personal-cabinet__renders-area"),a("contactInformation","id"),e)},700),m(a(".personal-cabinet__button"),a(".personal-cabinet__block-list"),a(".personal-cabinet__menu-cross"),"personal-cabinet__block-list_active"),_(a(".input__area","all")),d(a(".personal-cabinet__link","all"))});
