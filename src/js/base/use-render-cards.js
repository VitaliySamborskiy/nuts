import { useGetImg } from "./use-img.js";

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
            img += `<div class="swiper-slide"><img class="product__slide" src="" alt="product img" loading="lazy"/></div>`;
        });

        html = `${
            data.action || data.newProduct
                ? `<div class ="product__card-flag ${
                      data.action ? "product__card-flag-discount" : "product__card-flag-new"
                  }">
                <p class ="product__card-flag-text">${data.action ? "АКЦИЯ" : "НОВИНКА"}</p>
            </div>`
                : ""
        }  
            <a href="#" class="">
                <div class="product__card-swiper">
                    <div class="product__card-search">
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
                    <div class="product__card-button-prev">
                        <svg class="product__card-svg-arrow">
                            <use href="#arrow"></use>
                        </svg>
                    </div>
                    <div class="product__card-button-next">
                        <svg class="product__card-svg-arrow">
                            <use href="#arrow"></use>
                        </svg>
                    </div>
                </div>
                <div class="product__card-text-block">
                    <h4 class="product__card-type">${data.nutsType}</h4>
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
                    <div class="product__card-bottom">
                        <div class="product__card-bottom-price">
                            <p class="product__card-bottom-price-text">Цена:</p>
                            ${
                                data.price && data.cationPrice
                                    ? `<p class="product__card-bottom-price-regular product__card-bottom-price-green">
                            ${data.cationPrice}<span>грн.</span></p>
                            <p class="product__card-bottom-price-discount product__card-bottom-price-gray">
                            ${data.price}<span>грн.</span></p>`
                                    : `<p class="product__card-bottom-price-regular product__card-bottom-price-green">
                            ${data.price}<span>грн.</span></p>`
                            }
                        </div>
                        <button class="green-button product__card-bottom-buy">
                            <span>Купить</span>
                        </button>
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
            next: cardProduct.querySelector(`.product__card-button-next`),
            prev: cardProduct.querySelector(`.product__card-button-prev`),
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
