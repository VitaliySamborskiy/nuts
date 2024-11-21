import{h as c,i as k,j as I,k as A,l as L,m as F,n as $,g as e,u as _,o as v,c as x,s as o,f as C,p as U}from"./main-DOJSKYfZ.js";import{u as T,a as N}from"./querry-parameter-8F5Ngxzv.js";import{u as R,s as b,a as h}from"./phone-mask-Ds9gQdPx.js";import{u,a as g,n as f}from"./form-validate-CDH3izCh.js";function M(a,t,n,s){a.addEventListener("click",()=>{t.classList.add(s)}),n.addEventListener("click",()=>{t.classList.remove(s)})}function y(a,t){S(t,a)}function H(a,t){B(t,a)}function S(a,t){let n="";n=`<div class="personal-cabinet__table-order-history">
                    <table class="personal-cabinet__table">
                        <thead>
                            <tr class="personal-cabinet__table-header">
                                <th class="personal-cabinet__table-block-title">
                                    <h3 class="personal-cabinet__table-title">№ Заказа</h3>
                                    <svg class="personal-cabinet__table-svg">
                                        <use href="#arrow_down"></use>
                                    </svg>
                                </th>
                                <th class="personal-cabinet__table-block-title">
                                    <h3 class="personal-cabinet__table-title">Дата</h3>
                                    <svg class="personal-cabinet__table-svg">
                                        <use href="#arrow_down"></use>
                                    </svg>
                                </th>
                                <th class="personal-cabinet__table-block-title">
                                    <h3 class="personal-cabinet__table-title">Кол - во товаров</h3>
                                    <svg class="personal-cabinet__table-svg">
                                        <use href="#arrow_down"></use>
                                    </svg>
                                </th>
                                <th class="personal-cabinet__table-block-title">
                                    <h3 class="personal-cabinet__table-title">Статус</h3>
                                    <svg class="personal-cabinet__table-svg">
                                        <use href="#arrow_down"></use>
                                    </svg>
                                </th>
                                <th class="personal-cabinet__table-block-title">
                                    <h3 class="personal-cabinet__table-title">Стоимость</h3>
                                    <svg class="personal-cabinet__table-svg">
                                        <use href="#arrow_down"></use>
                                    </svg>
                                </th>
                                <th class="personal-cabinet__table-block-title">
                                    <h3 class="personal-cabinet__table-title">Функции</h3>
                                    <svg class="personal-cabinet__table-svg">
                                        <use href="#arrow_down"></use>
                                    </svg>
                                </th>
                            </tr>
                        </thead>
                      ${P()}
                    </table>
                </div>`,t.innerHTML=n}function B(a,t){let n="";n+=`<div class="personal-cabinet__table-order-history">
                    <table class="personal-cabinet__table">
                        <thead>
                            <tr class="personal-cabinet__table-header personal-cabinet__table-header-transaction">
                                <th class="personal-cabinet__table-transaction">
                                    <h3 class="personal-cabinet__table-title">Добавлено</h3>
                                    <svg class="personal-cabinet__table-svg">
                                        <use href="#arrow_down"></use>
                                    </svg>
                                </th>
                                <th class="personal-cabinet__table-transaction">
                                    <h3 class="personal-cabinet__table-title">Статус</h3>
                                    <svg class="personal-cabinet__table-svg">
                                        <use href="#arrow_down"></use>
                                    </svg>
                                </th>
                                <th class="personal-cabinet__table-transaction">
                                    <h3 class="personal-cabinet__table-title">Сумма</h3>
                                    <svg class="personal-cabinet__table-svg">
                                        <use href="#arrow_down"></use>
                                    </svg>
                                </th>
                            </tr>
                        </thead>
                         ${P()}
                    </table>
                </div>`,t.innerHTML=n}function P(){let a="";return a+=`  <tbody>
                      <tr>
                         <td class="personal-cabinet__table-info-text">Дані відсутні</td>
                      </tr>
               </tbody>`,a}async function j(a,t,n){let s,r;t.role.company?s=c(a,["company","contactPerson","emailContact","phone","avatar"]):s=c(a,["name","emailContact","phone","avatar"]),await k(n,"user").then(l=>{l.forEach(m=>{m.data.email===t.email&&(r=m.id)})}),await I(s.avatar).then(l=>{s.avatar=l,A(t.avatar)}).catch(l=>{console.log(l),s.avatar=null}),await L(n,"user",r,s).then(l=>{}).catch(l=>{console.log(l)});const i=await F(n,{displayName:s.name,photoURL:s.avatar,phoneNumber:s.phone});$(i,window.innerWidth>=768?e(".header__top-authentication-wrapper"):e(".burger__authentication"))}function O(a,t,n){let s="",r="";r=a.role.company?`<div class="input__block">
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
                            ${r}
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
                </form>`,t.innerHTML=s,a.avatar?_(a.avatar,e(".personal-cabinet__img")):_("gs://nuts-17b69.appspot.com/avatar.webp",e(".personal-cabinet__img")),R(e("phoneNumber","id"),"UA",/\+/g,"+380"),u(e(".input__area","all"),e(".input__label","all")),g(e("renameForm","id"),e(".personal-cabinet__input","all"),{company:{void:"наазва компанії не вказана"},сontactPerson:{void:"контактну особу не вказано!"},fullName:{void:"фио не вказано!"},email:{void:"не вказана електрона почта!",regExp:"не правильна почта відсутній символ @"},phone:{void:"не вказаний номер телефону",regExp:"не вірний формат номеру телефону"},photoAvatar:{void:null,regExp:"Ваш файл не відповідає формату .png, .jpg, або .jpeg"}},{email:/[0-9a-zа-яціїєґ\\.\\@]+@[0-9a-zа-яціїєґ\\.]+/gi,phone:/^\+?[0-9]{1,4}[-\s]?[(]?[0-9]{2,4}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}$/gi,photoAvatar:/([a-z0-9а-яціїєґ\s_\\.\-\\(\\):])+(\.png|\.jpg|\.jpeg)$/gi},j,e(".personal-cabinet__save-button"),[e("renameForm","id"),a,n],e(".personal-cabinet__img"),e(".personal-cabinet__input-photo-user"))}function Z(a){let t="";t=`<div class="personal-cabinet__address">
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
                </div>`,a.innerHTML=t,u(e(".input__area","all"),e(".input__label","all")),g(e("passwordUserForm","id"),e(".personal-cabinet__input","all"),{password:{void:"не ведений пароль",regExp:"пароль має містити латинські літери A-Z, хочаб ону цифру 0-9 та один спеціальний символ з #?!@$%^&*-"},newPassword:{void:"не ведений пароль",regExp:"пароль має містити латинські літери A-Z, хочаб ону цифру 0-9 та один спеціальний символ з #?!@$%^&*-"},confirmPassword:{void:"не ведений пароль",regExp:"пароль має містити латинські літери A-Z, хочаб ону цифру 0-9 та один спеціальний символ з #?!@$%^&*-",password:"Паролі не співпадають"}},{password:/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gi,newPassword:/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gi,confirmPassword:/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gi},()=>{},e(".personal-cabinet__address-button"))}async function z(a,t,n){let s,r;t.role.company?(s=c(a,["EDRPOUCode","city","addresses","companyLegalCity","companyLegalAddress","companyLegalIndex"]),v(s,["selectCountry","selectRegion","companyLegalSelectCountry","companyLegalSelectRegion"],[".registration__current-country",".registration__current-region",".personal-cabinet__current-country-legal",".personal-cabinet__current-region-legal"],["Страна","Область","Район","Воєводство","Повіт","Федеральна земля"])):(s=c(a,["city","city","addresses"]),v(s,["selectCountry","selectRegion"],[".registration__current-country",".registration__current-region"],["Страна","Область","Район","Воєводство","Повіт","Федеральна земля"])),await k(n,"user").then(i=>{i.forEach(l=>{l.data.email===t.email&&(r=l.id)})}),await L(n,"user",r,s).then(i=>{f.Notify.success("Дані успішно були оновлені"),console.log("дані оновлено"),x(e(".input__area","all"))}).catch(i=>{f.Notify.failure(`Сталася помилка ${i}`),console.log(i)})}function D(a,t,n){t.role.company?G(a,t,n):q(a,t,n)}function q(a,t,n){let s="";s=` <div class="personal-cabinet__address">
                    <h3 class="personal-cabinet__address-title">Адрес</h3>
                    <form class="personal-cabinet__address-form" id="addressUserForm">
                    ${b()}                
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
                </div>`,a.innerHTML=s,E("addressUserForm",t,n)}function G(a,t,n){let s="";s=` <div class="personal-cabinet__address-section-legal">
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
                            ${b()}
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
                                ${b({body:"personal-cabinet__select-body",header:"personal-cabinet__select-header",selectCountry:"personal-cabinet__select-country-legal",selectRegion:"personal-cabinet__select-region-legal",currentCountry:"personal-cabinet__current-country-legal",currentRegion:"personal-cabinet__current-region-legal",subClass:"region-legal",subBodyClass:"personal-cabinet__body-wrapper"})}
                                <div class="input__block">
                                    <label class="input__label" for="cityLegal">Город*</label>
                                    <input
                                        class="personal-cabinet__input input__area"
                                        id="cityLegal"
                                        type="text"
                                        name="cityLegal"
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
                </div>`,a.innerHTML=s,_("gs://nuts-17b69.appspot.com/personal-cabinet/personal-cabinet.webp",e(".personal-cabinet__address-img")),E("addressUserLegalForm",t,n)}function E(a,t,n){u(e(".input__area","all"),e(".input__label","all")),g(e(a,"id"),e(".personal-cabinet__input","all"),{city:{void:"не вказане місто",regExp:"Назви міст не мають мати цифри в собі та інші заборонені символи"},cityLegal:{void:"не вказане місто",regExp:"Назви міст не мають мати цифри в собі та інші заборонені символи"}},{city:/[a-zа-яціїєґ\\-]+/gi,cityLegal:/[a-zа-яціїєґ\\-]+/gi},z,e(".personal-cabinet__address-button"),[e(a,"id"),t,n]),o(e(".registration__current-country","all"),e(".registration__select-country","all")),o(e(".registration__current-region","all"),e(".registration__select-region","all")),h(e(".registration__current-country"),e(".inputs-select__body-wrapper","all"),e(".registration__current-region"),e(".region")),o(e(".personal-cabinet__current-country-legal","all"),e(".personal-cabinet__select-country-legal","all")),o(e(".personal-cabinet__current-region-legal","all"),e(".personal-cabinet__select-region-legal","all"));try{h(e(".personal-cabinet__current-country-legal"),e(".personal-cabinet__body-wrapper","all"),e(".personal-cabinet__current-region-legal"),e(".region-legal"))}catch{}}let d;function w(a,t,n,s){window.location.search!==""?(a.forEach(r=>{r.classList.remove("personal-cabinet__link_active")}),p(n,t),e(d.tabButton,"id").classList.add("personal-cabinet__link_active")):p(n,t),a.forEach(r=>{r.addEventListener("click",i=>{a.forEach(l=>{l.classList.remove("personal-cabinet__link_active")}),i.currentTarget.classList.add("personal-cabinet__link_active"),T(["tabButton"],[i.currentTarget.id]),p(n,t),s.classList.remove("personal-cabinet__block-list_active")})})}function p(a,t){switch(d=N(["tabButton"],["tabButton"]),d.tabButton){case"tableOrder":y(e(".personal-cabinet__renders-area"));break;case"tableTransaction":H(e(".personal-cabinet__renders-area"));break;case"contactInformation":O(t,e(".personal-cabinet__renders-area"),a);break;case"passwordUser":Z(e(".personal-cabinet__renders-area"));break;case"addressForm":D(e(".personal-cabinet__renders-area"),t,a);break;default:y(e(".personal-cabinet__renders-area")),e("tableOrder","id").classList.add("personal-cabinet__link_active");break}}document.addEventListener("DOMContentLoaded",async function(){const a=C.getApp();_("gs://nuts-17b69.appspot.com/avatar.webp",e(".personal-cabinet__img")),setTimeout(()=>{let t=U.getUser();w(e(".personal-cabinet__link","all"),t,a,e(".personal-cabinet__block-list"))},600),M(e(".personal-cabinet__button"),e(".personal-cabinet__block-list"),e(".personal-cabinet__menu-cross"),"personal-cabinet__block-list_active"),x(e(".input__area","all")),w(e(".personal-cabinet__link","all"))});
