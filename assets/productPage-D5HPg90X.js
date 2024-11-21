import{a as _,g as s,u,f as l}from"./main-DOJSKYfZ.js";import{g as n}from"./local-storage-Dq6mamxl.js";import{s as d}from"./swiper-BDI-ONPN.js";import{u as g,a as b}from"./querry-parameter-8F5Ngxzv.js";import"./youtube-app-DMHovVLY.js";async function m(e,t,p){if(t)i(e,t),g(["product-art"],[t[0].art]);else{const r=b(["art"],["product-art"]),a=(await _(p,"products")).filter(c=>c.art===r.art);i(e,a)}}function i(e,t){document.title=t[0].title;let p="",r="";t[0].imgUrl.forEach(()=>{r+=`<div class="swiper-slide">
                   <picture class="product-page__block-img"><img class="product-page__img" src="" alt="product img" loading="lazy" width="553" height="571"/></picture>
                </div>`}),p=` <div class="product-page__content" data-title="${t[0].title}" data-prises="${t[0].cationPrice?t[0].cationPrice:t[0].price} ">
        <div class="product-page__swiper-block">
            <div class="base-product__search product-page__search-background">
                <button class="circle-button product-page__circle-button" aria-label="product preview">
                    <svg class="circle-button-svg product-page__search-svg">
                        <use href="#search"></use>
                    </svg>
                </button>
            </div>
            ${t[0].action||t[0].newProduct?`<div class ="base-product__flag product-page__flag ${t[0].action?"base-product__flag-discount":"base-product__flag-new"}">
                <p class ="base-product__flag-text">${t[0].action?"АКЦИЯ":"НОВИНКА"}</p>
            </div>`:""}
            <div class="swiper">
                <div class="swiper-wrapper">
                    ${r}
                </div>
            </div>
            <div class="base-product__button-prev">
                <svg class="base-product__svg-arrow">
                    <use href="#arrow"></use>
                </svg>
            </div>
            <div class="base-product__button-next">
                <svg class="base-product__svg-arrow">
                    <use href="#arrow"></use>
                </svg>
            </div>
        </div>
        <div class="product-page__text-content">
            <div class="product-page__header-info">
                <p class="product-page__type">${t[0].nutsType}</p>
                <p class="product-page__art">Арт: ${t[0].art}</p>
            </div>
            <h2 class="product-page__title">${t[0].title}</h2>
            <ul class="product-page__info-items">
                <li class="product-page__info-item">
                    <p class="product-page__info-title">Состав:</p>
                    <p class="product-page__info-text">${t[0].ingredients}</p>
                </li>
                <li class="product-page__info-item">
                    <p class="product-page__info-title">Масса нетто:</p>
                    <p class="product-page__info-text">${t[0].weight}</p>
                </li>
                <li class="product-page__info-item">
                    <p class="product-page__info-title">Энергетическая ценность:</p>
                    <p class="product-page__info-text">${t[0].energyValue}Ккал.</p>
                </li>
                <li class="product-page__info-item">
                    <p class="product-page__info-title">Срок годности:</p>
                    <p class="product-page__info-text">${t[0].expirationDate}, с даты расфасовки (указана на упаковке)</p>
                </li>
            </ul>
            <div class="product-page__important-block">
                <svg class="product-page__important-svg">
                    <use href="#exclamationPoint"></use>
                </svg>
                <p class="product-page__important-text">
                    Хранить в помещениях, защищенных от попадания прямых, солнечных лучей, при температуре от +3 °C до
                    +20 °C, и относительной влажности воздуха не более 75 %
                </p>
            </div>
            <div class="product-page__bottom">
                <div class="base-product__bottom-price">
                    <p class="base-product__bottom-price-text">Ваша цена:</p>
                    ${t[0].price&&t[0].cationPrice?`<p class="base-product__bottom-price-regular base-product__bottom-price-green">
                            ${t[0].cationPrice}<span>грн.</span></p>
                            <p class="base-product__bottom-price-discount base-product__bottom-price-gray">
                            ${t[0].price}<span>грн.</span></p>`:`<p class="base-product__bottom-price-regular base-product__bottom-price-green">
                            ${t[0].price}<span>грн.</span></p>`}
                </div>
                <button class="green-button product-page__bottom-buy">Заказать</button>
            </div>
        </div>
    </div>`,e.innerHTML=p;let o=s(".product-page__img","all");o.forEach((a,c)=>u(t[0].imgUrl[c],o[c]))}document.addEventListener("DOMContentLoaded",async function(){const e=l.getApp();u("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_1.webp",s(".product-information__img"));const t=n();await m(s(".product-page__container"),t,e),d(s(".swiper"),s(".base-product__button-prev"),s(".base-product__button-next"),"auto",0)});
