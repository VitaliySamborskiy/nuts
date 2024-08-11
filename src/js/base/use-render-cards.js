import { useGetImg } from "./useGetImg.js";

export function useRenderCards(arrData, element) {
    let fragment = document.createDocumentFragment();
    if (arrData.length === 0) {
        return (element.innerHTML = `<p>Сталася помилка. Або продукція відсутня</p>`);
    }

    arrData.forEach(async (data) => {
        let html = "";
        let flag = "";
        let prise = "";

        if (data.action || data.newProduct) {
            flag = `<div class="product__card-flag ${data.action ? "product__card-flag-discount" : "product__card-flag-new"}">
                <p class="product__card-flag-text">${data.action ? "АКЦИЯ" : "НОВИНКА"}</p>
            </div>`;
        } else {
            flag = null;
        }

        if (data.priсe && data.cationPrice) {
            prise = `<p class="product__card-bottom-price-discount product__card-bottom-price-green">
                        ${data.cationPrice}
                        <span>грн.</span>
                    </p>
                    <p class="product__card-bottom-price-regular product__card-bottom-price-gray">
                        ${data.priсe}
                        <span>грн.</span>
                    </p>`;
        } else {
            prise = `
                    <p class="product__card-bottom-price-regular product__card-bottom-price-green">
                        ${data.priсe}
                        <span>грн.</span>
                    </p>`;
        }

        html = `
            ${flag}  
            <a href="#" class="">
                <div class="product__card-swiper">
                    <div class="product__card-search">
                        <load
                            src="src/components/base/button.html"
                            class_button="circle-button"
                            class_button_text=""
                            component_class=""
                            button_text="<svg class='circle-button-svg'>
                        <use href='#search'></use></svg>"
                        />
                    </div>
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><img class="product__slide-1" src="" /></div>
                            <div class="swiper-slide"><img class="product__slide-2" src="" /></div>
                            <div class="swiper-slide"><img class="product__slide-3" src="" /></div>
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
                            ${prise}
                        </div>
                        <load
                            src="src/components/base/button.html"
                            class_button="green-button product__card-bottom-buy"
                            class_button_text=""
                            component_class=""
                            button_text="Купить"
                        />
                    </div>
                </div>
            </a>`;

        const cardProduct = document.createElement("div");
        cardProduct.classList.add("product__card");
        cardProduct.setAttribute("data-arc", data.art);
        cardProduct.innerHTML = html;
        useGetImg(data.imgUrl, cardProduct.querySelector(".product__slide-1"));
        useGetImg(data.imgUrl, cardProduct.querySelector(".product__slide-2"));
        useGetImg(data.imgUrl, cardProduct.querySelector(".product__slide-3"));
        fragment.append(cardProduct);
    });

    element.append(fragment);
}
