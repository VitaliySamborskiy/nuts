import { select } from "./base/select.js";
import { burgerMenu } from "./base/burger.js";
import { initializeFireBase } from "./base/useInstalizeFireBase.js";
import { useSetProduct, useGetFirestore, useSetNews } from "./base/useGetFierstore.js";
import { getImages } from "./get-images.js";
import { swiperInit } from "./swiper-init.js";
import { renders } from "./renders.js";
import { getElement } from "./base/get-element-dom.js";
import { filterProductsWeight } from "./catalog-products/filter-products.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = await initializeFireBase();
    getImages();
    select(getElement(".header__select-language", true), getElement(".header__select", true));
    select(
        getElement(".product-filter__current-weight", true),
        getElement(".product-filter__select-weight", true),
    );
    select(
        getElement(".product-filter__current-taste", true),
        getElement(".product-filter__select-taste", true),
    );
    burgerMenu();
    await swiperInit(app);
    await renders(app);
    filterProductsWeight(
        getElement(".product__card", true),
        getElement(".product-filter__apply-button"),
        getElement(".product-filter__cross-button"),
    );
});
