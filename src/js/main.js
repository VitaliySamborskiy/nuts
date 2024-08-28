import { burgerMenu } from "./base/burger.js";
import { initializeFireBase } from "./base/useInstalizeFireBase.js";
import { useSetProduct, useGetFirestore, useSetNews } from "./base/useGetFierstore.js";
import { getImages } from "./get-images.js";
import { swiperInit } from "./swiper-init.js";
import { renders } from "./renders.js";
import { getElement } from "./base/get-element-dom.js";
import { filterProducts } from "./catalog-products/filter-products.js";
import { selects } from "./selects.js";
import { useInputActive } from "./registration/input-active.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = await initializeFireBase();
    getImages();
    selects();
    burgerMenu();
    await swiperInit(app);
    await renders(app);
    filterProducts(
        getElement(".product__card", true),
        getElement(".product-filter__apply-button"),
        getElement(".product-filter__cross-button"),
        getElement(".product-filter__higher-price"),
        getElement(".product-filter__lower-price"),
        getElement(".product__cards"),
    );
    useInputActive(getElement(".registration__input", true));
});
