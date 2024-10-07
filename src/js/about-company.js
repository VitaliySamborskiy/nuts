import { useGetFirestore } from "./base/use-fire-store.js";
import { useRenderNewsCards } from "./base/news-render-cards.js";
import { getElement } from "./base/get-element-dom.js";
import { useGetImg } from "./base/use-img.js";
import { swiper } from "./base/swiper.js";
import { useGalleryRenders } from "./gallery/gallery.js";
import { fireBaseService } from "./base/fire-base-service.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = fireBaseService.getApp();
    useRenderNewsCards(await useGetFirestore(app, "news"), getElement(".news-swiper__renders"));
    useGetImg("gs://nuts-17b69.appspot.com/companies/companies_1.webp", getElement(".company-page__img"));
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
});
