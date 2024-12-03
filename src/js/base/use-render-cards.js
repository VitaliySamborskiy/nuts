import { useGetImg } from "./fire-base-functions/use-img.js";

export function useRenderCards(arrData, element) {
    let fragment = document.createDocumentFragment();
    let swiperArr = [];

    if (arrData.length === 0) {
        return (element.innerHTML = `<p>Сталася помилка. Або продукція відсутня</p>`);
    }

    for (let data of arrData) {
        let html = "";
        let img = "";

        data.imgUrl.forEach(() => {
            img += `<div class="swiper-slide"><img class="product__slide" src="" alt="product img" loading="lazy" width="406" height="278"/></div>`;
        });

        html = `${
            data.action || data.newProduct
                ? `<div class ="base-product__flag product-page__flag ${
                      data.action ? "base-product__flag-discount" : "base-product__flag-new"
                  }">
                <p class ="base-product__flag-text">${data.action ? "АКЦИЯ" : "НОВИНКА"}</p>
            </div>`
                : ""
        }
            <a href="/nuts/src/pages/product-page.html" class="product__link">
                <div class="product__card-swiper">
                    <div class="base-product__search">
                    <button class="circle-button" aria-label="product preview">
                    <svg class='circle-button-svg'>
                        <use href='#search'></use></svg>
                        </button>
                    </div>
                    <div class="swiper">
                        <div class="swiper-wrapper">
                        ${img}
                        </div>
                    </div>
                        <svg class="base-product__button-prev base-product__svg-arrow">
                            <use href="#arrow"></use>
                        </svg>
                        <svg class="base-product__button-next base-product__svg-arrow">
                            <use href="#arrow"></use>
                        </svg>
                </div>
                <div class="product__card-text-block">
                    <h3 class="product__card-type">${data.nutsType}</h3>
                    <p class="product__card-art">Арт:${data.art}</p>
                    <h3 class="product__card-title">${data.title}</h3>
                    <div class="product__card-info">
                        <div class="product__card-weight">
                            <svg class="product__card-weight-svg">
                                <use href="#weights"></use>
                            </svg>
                            <div class="product__card-weight-block">
                                <p class="product__card-weight-text">Масса:</p>
                                <p class="product__card-weight-data">${data.weight}</p>
                            </div>
                        </div>
                        <div class="product__card-packaging">
                            <svg class="product__card-packaging-svg">
                                <use href="#package"></use>
                            </svg>
                            <div class="product__card-packaging-block">
                                <p class="product__card-packaging-text">Упаковка</p>
                                <p class="product__card-packaging-data">${data.packaging}</p>
                            </div>
                        </div>
                    </div>
                    <div class="base-product__bottom">
                        <div class="base-product__bottom-price">
                            <p class="base-product__bottom-price-text">Цена:</p>
                            ${
                                data.price && data.cationPrice
                                    ? `<p class="base-product__bottom-price-regular base-product__bottom-price-green">
                            ${data.cationPrice}<span>грн.</span></p>
                            <p class="base-product__bottom-price-discount base-product__bottom-price-gray">
                            ${data.price}<span>грн.</span></p>`
                                    : `<p class="base-product__bottom-price-regular base-product__bottom-price-green">
                            ${data.price}<span>грн.</span></p>`
                            }
                        </div>
                        <button class="green-button base-product__bottom-buy">Купить</button>
                    </div>
                </div>
            </a>`;

        const cardProduct = document.createElement("div");
        cardProduct.classList.add("product__card");

        cardProduct.setAttribute("data-arc", data.art);
        cardProduct.setAttribute("data-weight", data.weight);
        cardProduct.setAttribute("data-taste", data.taste);
        cardProduct.setAttribute("data-price", data.cationPrice ? data.cationPrice : data.price);
        cardProduct.setAttribute("data-imgUrl", JSON.stringify(data.imgUrl));
        cardProduct.setAttribute("data-title", data.title);
        cardProduct.setAttribute("data-prises", JSON.stringify([data.price, data.cationPrice]));
        cardProduct.innerHTML = html;

        swiperArr.push({
            swiper: cardProduct.querySelector(`.swiper`),
            next: cardProduct.querySelector(`.base-product__button-next`),
            prev: cardProduct.querySelector(`.base-product__button-prev`),
        });

        for (let i = 0; i < data.imgUrl.length; ++i) {
            const imgElement = cardProduct.querySelectorAll(`.product__slide`);
            let index = 0;
            imgElement.forEach((element) => {
                useGetImg(data.imgUrl[index++], element);
            });
        }

        fragment.append(cardProduct);
    }

    element.append(fragment);

    return swiperArr;
}
