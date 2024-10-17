import { useGetQueryParameter, useSetQueryParameter } from "../base/querry-parameter.js";
import { useGetFirestore } from "../base/fire-base-functions/use-fire-store.js";
import { getElement } from "../base/get-element-dom.js";
import { useGetImg } from "../base/fire-base-functions/use-img.js";

export async function useRenderProductSection(container, data, app) {
    if (data) {
        renderProductInfo(container, data);
        useSetQueryParameter(["product-art"], [data[0].art]);
    } else {
        const productArt = useGetQueryParameter(["art"], ["product-art"]);
        const dataArr = await useGetFirestore(app, "products");
        const dataResult = dataArr.filter((item) => {
            return item.art === productArt.art;
        });
        renderProductInfo(container, dataResult);
    }
}

function renderProductInfo(container, data) {
    document.title = data[0].title;
    let html = ``;
    let img = ``;

    data[0].imgUrl.forEach(() => {
        img += `<div class="swiper-slide">
                   <picture class="product-page__block-img"><img class="product-page__img" src="" alt="product img" loading="lazy"/></picture>
                </div>`;
    });

    html = ` <div class="product-page__content">
        <div class="product-page__swiper-block">
            <div class="base-product__search product-page__search-background">
                <button class="circle-button product-page__circle-button" aria-label="product preview">
                    <svg class="circle-button-svg product-page__search-svg">
                        <use href="#search"></use>
                    </svg>
                </button>
            </div>
            ${
                data[0].action || data[0].newProduct
                    ? `<div class ="base-product__flag product-page__flag ${
                          data[0].action ? "base-product__flag-discount" : "base-product__flag-new"
                      }">
                <p class ="base-product__flag-text">${data[0].action ? "АКЦИЯ" : "НОВИНКА"}</p>
            </div>`
                    : ""
            }
            <div class="swiper">
                <div class="swiper-wrapper">
                    ${img}
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
                <p class="product-page__type">${data[0].nutsType}</p>
                <p class="product-page__art">Арт: ${data[0].art}</p>
            </div>
            <h2 class="product-page__title">${data[0].title}</h2>
            <ul class="product-page__info-items">
                <li class="product-page__info-item">
                    <p class="product-page__info-title">Состав:</p>
                    <p class="product-page__info-text">${data[0].ingredients}</p>
                </li>
                <li class="product-page__info-item">
                    <p class="product-page__info-title">Масса нетто:</p>
                    <p class="product-page__info-text">${data[0].weight}</p>
                </li>
                <li class="product-page__info-item">
                    <p class="product-page__info-title">Энергетическая ценность:</p>
                    <p class="product-page__info-text">${data[0].energyValue}Ккал.</p>
                </li>
                <li class="product-page__info-item">
                    <p class="product-page__info-title">Срок годности:</p>
                    <p class="product-page__info-text">${data[0].expirationDate}, с даты расфасовки (указана на упаковке)</p>
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
                    ${
                        data[0].price && data[0].cationPrice
                            ? `<p class="base-product__bottom-price-regular base-product__bottom-price-green">
                            ${data[0].cationPrice}<span>грн.</span></p>
                            <p class="base-product__bottom-price-discount base-product__bottom-price-gray">
                            ${data[0].price}<span>грн.</span></p>`
                            : `<p class="base-product__bottom-price-regular base-product__bottom-price-green">
                            ${data[0].price}<span>грн.</span></p>`
                    }
                </div>
                <button class="green-button product-page__bottom-buy">Заказать</button>
            </div>
        </div>
    </div>`;

    container.innerHTML = html;

    let imgTabElement = getElement(".product-page__img", "all");

    imgTabElement.forEach((value, index) => useGetImg(data[0].imgUrl[index], imgTabElement[index]));
}
