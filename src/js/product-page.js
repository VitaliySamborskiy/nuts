import { fireBaseService } from "./base/services/fire-base-service.js";
import { getProduct } from "./base/local-storage.js";
import { swiper } from "./base/swiper.js";
import { getElement } from "./base/get-methods/get-element-dom.js";
import { useRenderProductSection } from "./product-page/renders-product-section.js";
import { useGetImg } from "./base/fire-base-functions/use-img.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = fireBaseService.getApp();

    useGetImg(
        "gs://nuts-17b69.appspot.com/main_page/main_page-benefit_1.webp",
        getElement(".product-information__img"),
    );

    const productData = getProduct();

    await useRenderProductSection(getElement(".product-page__container"), productData, app);

    swiper(
        getElement(".swiper"),
        getElement(".base-product__button-prev"),
        getElement(".base-product__button-next"),
        "auto",
        0,
    );
});
