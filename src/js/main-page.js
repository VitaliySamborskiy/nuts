import { useGetFirestore } from "./base/useGetFierstore.js";
import { useRenderCards } from "./base/use-render-cards.js";
import { getElement } from "./base/get-element-dom.js";
import { swiper } from "./base/swiper.js";
import { useRenderNewsCards } from "./base/news-render-cards.js";
import { setupApp } from "./main.js";

document.addEventListener("DOMContentLoaded", async function () {
    const dataNews = await useGetFirestore(await setupApp(), "news");
    useRenderNewsCards(dataNews, getElement(".news-swiper__renders"));
    const swipersCard = useRenderCards(
        await useGetFirestore(await setupApp(), "products"),
        getElement(".product__cards"),
    );
    swipersCard.forEach((element) => {
        swiper(element.swiper, element.prev, element.next, "auto", 0);
    });
});
