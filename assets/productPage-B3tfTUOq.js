import{a as g,g as e,u as d,f as b}from"./main-BPgowrMU.js";import{c as n,a as m,g as v}from"./product-cards-AWzqhq-0.js";import{s as f}from"./swiper-BDI-ONPN.js";import{u as w,a as h}from"./querry-parameter-8F5Ngxzv.js";import"./youtube-app-DMHovVLY.js";async function $(p,t,r){if(t)l(p,t),w(["product-art"],[t[0].art]);else{const s=h(["art"],["product-art"]),i=(await g(r,"products")).filter(a=>a.art===s.art);l(p,i)}}function l(p,t){document.title=t[0].title;let r="",s="";t[0].imgUrl.forEach(()=>{s+=`<div class="swiper-slide">
                   <picture class="product-page__block-img"><img class="product-page__img" src="" alt="product img" loading="lazy" width="553" height="571"/></picture>
                </div>`}),r=` <div class="product-page__content" data-title="${t[0].title}" data-prises="${JSON.stringify([t[0].cationPrice?t[0].cationPrice:t[0].price])}" data-imgUrl=${JSON.stringify(t[0].imgUrl)}>
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
            <div class="swiper product-page__swiper">
                <div class="swiper-wrapper">
                    ${s}
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
    </div>`,p.innerHTML=r;const c=e(".product-page__content"),i=e(".product-page__circle-button"),a=e(".popup__cross");let o=!0;i.addEventListener("click",()=>{o=!0,n(e(".popup__content"),e(".popup__background-block"),o),m({title:c.getAttribute("data-title"),prices:JSON.parse(c.getAttribute("data-prises")),images:JSON.parse(c.getAttribute("data-imgUrl"))},{title:e(".popup__title"),prices:e(".popup__price"),slideWrapper:e(".popup__swiper-wrapper"),popup:e(".popup__content"),popupBlock:e(".popup__background-block")})}),a.addEventListener("click",()=>{o=!1,n(e(".popup__content"),e(".popup__background-block"),o)});const u=e(".product-page__img","all");u.forEach((k,_)=>d(t[0].imgUrl[_],u[_]))}document.addEventListener("DOMContentLoaded",async function(){const p=b.getApp();d("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_1.webp",e(".product-information__img"));const t=v();await $(e(".product-page__container"),t,p),f(e(".product-page__swiper"),e(".base-product__button-prev"),e(".base-product__button-next"),"auto",0)});
