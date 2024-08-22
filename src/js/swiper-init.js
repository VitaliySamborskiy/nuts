import { getElement } from "./base/get-element-dom.js";
import { swiper } from "./base/swiper.js";
import { useGetFirestore } from "./base/useGetFierstore.js";

export async function swiperInit(app) {
    const videoData = await useGetFirestore(app, "videoId", "main-pages");
    console.log(videoData);
    const playersMainPage = getElement(".manufacturing__player", true);
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
    swiper(
        getElement(".news-swiper__cards"),
        getElement(".news-swiper__prev-button"),
        getElement(".news-swiper__next-button"),
        null,
        null,
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
}
