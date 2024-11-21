import { useGetFirestore } from "./base/fire-base-functions/use-fire-store.js";
import { useRenderCards } from "./base/use-render-cards.js";
import { getElement } from "./base/get-methods/get-element-dom.js";
import { swiper } from "./base/swiper.js";
import { useRenderNewsCards } from "./base/renders-methods/news-render-cards.js";
import { useCards } from "./base/product-cards.js";
import { useGetImg } from "./base/fire-base-functions/use-img.js";
import { fireBaseService } from "./base/services/fire-base-service.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = fireBaseService.getApp();

    await useGetImg("gs://nuts-17b69.appspot.com/main_page/main_page-1.webp", getElement(".homepage__img"));
    await useGetImg("gs://nuts-17b69.appspot.com/main_page/main_page-3.webp", getElement(".main-goal__img"));
    await useGetImg("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_1.webp", getElement(".benefits__nuts"));
    await useGetImg(
        "gs://nuts-17b69.appspot.com/main_page/main_page-benefit_2.webp",
        getElement(".benefits__hazelnut"),
    );
    await useGetImg("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_3.webp", getElement(".benefits__rosehip"));
    await useGetImg("gs://nuts-17b69.appspot.com/main_page/main_page-4.webp", getElement(".eco__img"));
    const youTube = getElement(".manufacturing__preview-img", "all");
    const youTubeImg = [
        "gs://nuts-17b69.appspot.com/main_page/main_page-2.webp",
        "gs://nuts-17b69.appspot.com/companies/companies_2.webp",
    ];
    for (let i = 0; i < youTube.length; i++) {
        useGetImg(youTubeImg[i], youTube[i]);
    }

    const products = await useGetFirestore(app, "products");
    const videoData = await useGetFirestore(app, "videoId", "main-pages");
    useRenderNewsCards(await useGetFirestore(app, "news"), getElement(".news-swiper__renders"));

    swiper(
        getElement(".manufacturing__swiper-video"),
        getElement(".manufacturing__button-prev"),
        getElement(".manufacturing__button-next"),
        "auto",
        0,
        null,
        getElement(".manufacturing__player", "all"),
        videoData.mainPage,
        getElement(".manufacturing__swiper", "all"),
        getElement(".manufacturing__preview-img-block", "all"),
        "manufacturing__preview-img-block_active",
    );
    const swipersCard = useRenderCards(products, getElement(".product__cards"));
    swipersCard.forEach((element) => {
        swiper(element.swiper, element.prev, element.next, "auto", 0);
    });
    swiper(
        getElement(".news-swiper__cards"),
        getElement(".news-swiper__prev-button"),
        getElement(".news-swiper__next-button"),
        null,
        0,
        {
            1920: {
                slidesPerView: 3,
                spaceBetween: 35,
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 35,
            },
            1140: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            375: {
                slidesPerView: 1.4,
                spaceBetween: 5,
            },
            320: {
                slidesPerView: 1.1,
                spaceBetween: 5,
            },
        },
    );

    useCards(
        getElement(".product__cards"),
        getElement(".popup__content"),
        getElement(".popup__background-block"),
        getElement(".popup__cross"),
        products,
    );
});
