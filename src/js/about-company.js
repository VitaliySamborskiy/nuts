import { useGetFirestore } from "./base/fire-base-functions/use-fire-store.js";
import { useRenderNewsCards } from "./base/renders-methods/news-render-cards.js";
import { getElement } from "./base/get-methods/get-element-dom.js";
import { useGetImg } from "./base/fire-base-functions/use-img.js";
import { swiper } from "./base/swiper.js";
import { useGalleryRenders } from "./gallery/gallery.js";
import { fireBaseService } from "./base/services/fire-base-service.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = fireBaseService.getApp();

    await useGetImg("gs://nuts-17b69.appspot.com/companies/companies_1.webp", getElement(".company-page__img"));
    useGetImg("gs://nuts-17b69.appspot.com/companies/companies_4.webp", getElement(".company-page-eco__img"));
    const youTube = getElement(".company__preview-img", "all");
    const youTubeImg = [
        "gs://nuts-17b69.appspot.com/companies/companies_2.webp",
        "gs://nuts-17b69.appspot.com/main_page/main_page-2.webp",
    ];
    for (let i = 0; i < youTube.length; i++) {
        useGetImg(youTubeImg[i], youTube[i]);
    }
    useGetImg("gs://nuts-17b69.appspot.com/companies/companies_3.webp", getElement(".ceo__representations-img"));
    const videoData = await useGetFirestore(app, "videoId", "main-pages");
    const playersMainPage = getElement(".manufacturing__player", "all");

    useRenderNewsCards(await useGetFirestore(app, "news"), getElement(".news-swiper__renders"));
    swiper(
        getElement(".manufacturing__swiper-video"),
        getElement(".manufacturing__button-prev"),
        getElement(".manufacturing__button-next"),
        "auto",
        0,
        null,
        playersMainPage,
        videoData.mainPage,
        getElement(".manufacturing__swiper", "all"),
        getElement(".manufacturing__preview-img-block", "all"),
        "manufacturing__preview-img-block_active",
    );
    const galleryInfo = await useGetFirestore(app, "gallery");
    useGalleryRenders(getElement(".gallery__box"), galleryInfo);

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
});
