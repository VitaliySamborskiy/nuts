import { useGetFirestore } from "./base/use-fire-store.js";
import { setupApp } from "./main.js";
import { useRenderNewsCards } from "./base/news-render-cards.js";
import { getElement } from "./base/get-element-dom.js";
import { useGetImg } from "./base/use-img.js";
import { swiper } from "./base/swiper.js";
import { useGalleryRenders } from "./base/gallery.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = await setupApp();
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
    const gallery = getElement(".gallery__img", "all");
    const galleryImg = [
        "gs://nuts-17b69.appspot.com/gallery/gallery_2.webp",
        "gs://nuts-17b69.appspot.com/gallery/gallery_3.webp",
        "gs://nuts-17b69.appspot.com/gallery/gallery_5.webp",
        "gs://nuts-17b69.appspot.com/gallery/gallery_6.webp",
    ];
    for (let i = 0; i < gallery.length; i++) {
        useGetImg(galleryImg[i], gallery[i]);
    }
    const galleryPreviewElement = getElement(".gallery__preview-img", "all");
    const galleryPreview = [
        "gs://nuts-17b69.appspot.com/gallery/gallery_4.webp",
        "gs://nuts-17b69.appspot.com/gallery/gallery_7.webp",
    ];
    for (let i = 0; i < galleryPreviewElement.length; i++) {
        useGetImg(galleryPreview[i], galleryPreviewElement[i]);
    }
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
        "manufacturing__preview-img-block_active",
    );
    const galleryInfo = await useGetFirestore(app, "gallery");
    useGalleryRenders(getElement(".gallery__box"), galleryInfo);
});
