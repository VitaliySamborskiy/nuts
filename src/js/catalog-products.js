import { useGetFirestore } from "./base/useGetFierstore.js";
import { setupApp } from "./main.js";
import { getElement } from "./base/get-element-dom.js";
import { useRenderCards } from "./base/use-render-cards.js";
import { swiper } from "./base/swiper.js";
import { filterProducts } from "./catalog-products/filter-products.js";

document.addEventListener("DOMContentLoaded", async function () {
    const swipersCard = useRenderCards(
        await useGetFirestore(await setupApp(), "products"),
        getElement(".product__cards"),
    );
    swipersCard.forEach((element) => {
        swiper(element.swiper, element.prev, element.next, "auto", 0);
    });
    filterProducts(
        getElement(".product__card", "all"),
        getElement(".product-filter__apply-button"),
        getElement(".product-filter__cross-button"),
        getElement(".product-filter__higher-price"),
        getElement(".product-filter__lower-price"),
        getElement(".product__cards"),
    );
});
