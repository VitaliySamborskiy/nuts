import { useGetFirestore } from "./base/use-fire-store.js";
import { useRenderCards } from "./base/use-render-cards.js";
import { getElement } from "./base/get-element-dom.js";
import { swiper } from "./base/swiper.js";
import { useRenderNewsCards } from "./base/news-render-cards.js";
import { setupApp } from "./main.js";
import { useCards } from "./base/product-cards.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = await setupApp();
    const videoData = await useGetFirestore(app, "videoId", "main-pages");
    const playersMainPage = getElement(".manufacturing__player", "all");
    swiper(
        getElement(".manufacturing__swiper-video"),
        getElement(".manufacturing__button-prev"),
        getElement(".manufacturing__button-next"),
        "auto",
        0,
        null,
        playersMainPage,
        videoData.mainPage,
        getElement(".manufacturing__swiper"),
        getElement(".manufacturing__preview-img-block", "all"),
    );
    const dataNews = await useGetFirestore(app, "news");
    useRenderNewsCards(dataNews, getElement(".news-swiper__renders"));
    const swipersCard = useRenderCards(await useGetFirestore(app, "products"), getElement(".product__cards"));
    swipersCard.forEach((element) => {
        swiper(element.swiper, element.prev, element.next, "auto", 0);
    });
    useCards(
        getElement(".product__cards"),
        getElement(".popup__content"),
        getElement(".popup__background-block"),
        getElement(".popup__cross"),
    );
});
