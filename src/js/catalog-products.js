import { useGetFirestore } from "./base/fire-base-functions/use-fire-store.js";
import { getElement } from "./base/get-element-dom.js";
import { useRenderCards } from "./base/use-render-cards.js";
import { swiper } from "./base/swiper.js";
import { filterProducts } from "./catalog-products/filter-products.js";
import { useCards } from "./base/product-cards.js";
import { useGetImg } from "./base/fire-base-functions/use-img.js";
import { fireBaseService } from "./base/services/fire-base-service.js";
import { select } from "./base/select.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = fireBaseService.getApp();
    const products = await useGetFirestore(app, "products");
    const swipersCard = useRenderCards(products, getElement(".product__cards"));

    swipersCard.forEach((element) => {
        swiper(element.swiper, element.prev, element.next, "auto", 0);
    });
    swiper(
        getElement(".eco-nuts__swiper"),
        getElement(".eco-nuts__button-prev"),
        getElement(".eco-nuts__button-next"),
        "auto",
        0,
    );

    useGetImg("gs://nuts-17b69.appspot.com/product_catalog/product_catalog_1.webp", getElement(".products-page__img"));

    const productCatalogImages = [
        "gs://nuts-17b69.appspot.com/product_catalog/product_catalog_2.webp",
        "gs://nuts-17b69.appspot.com/main_page/main_page-2.webp",
        "gs://nuts-17b69.appspot.com/companies/companies_2.webp",
    ];

    const productCatalogElement = getElement(".eco-nuts__img", "all");
    for (let i = 0; i < productCatalogElement.length; i++) {
        useGetImg(productCatalogImages[i], productCatalogElement[i]);
    }

    select(getElement(".product-filter__current-weight", "all"), getElement(".product-filter__select-weight", "all"));
    select(getElement(".product-filter__current-taste", "all"), getElement(".product-filter__select-taste", "all"));

    useCards(
        getElement(".product__cards"),
        getElement(".popup__content"),
        getElement(".popup__background-block"),
        getElement(".popup__cross"),
        products,
    );

    filterProducts(
        getElement(".product__card", "all"),
        getElement(".product-filter__apply-button"),
        getElement(".product-filter__cross-button"),
        getElement(".product-filter__higher-price"),
        getElement(".product-filter__lower-price"),
        getElement(".product__cards"),
    );
});
