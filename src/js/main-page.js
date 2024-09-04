import { useGetFirestore } from "./base/useGetFierstore.js";
import { useRenderCards } from "./base/use-render-cards.js";
import { getElement } from "./base/get-element-dom.js";
import { swiper } from "./base/swiper.js";
import { initializeFireBase } from "./base/useInstalizeFireBase.js";
import { useRenderNewsCards } from "./base/news-render-cards.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = await initializeFireBase();
    const dataNews = await useGetFirestore(app, "news");
    useRenderNewsCards(dataNews, getElement(".news-swiper__renders"));
    const dataProducts = await useGetFirestore(app, "products");
    const swipersCard = useRenderCards(dataProducts, getElement(".product__cards"));
    swipersCard.forEach((element) => {
        swiper(element.swiper, element.prev, element.next, "auto", 0);
    });

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
    );
});
