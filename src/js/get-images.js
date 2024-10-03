import { useGetImg } from "./base/use-img.js";
import { getElement } from "./base/get-element-dom.js";

export function getImages() {
    useGetImg("logo-1.svg", getElement(".header__center-logo"));
    useGetImg("logo-1.svg", getElement(".burger__logo-img"));
    useGetImg("user.svg", getElement(".header__top-img"));
    useGetImg("user.svg", getElement(".burger__img"));

    // useGetImg("gs://nuts-17b69.appspot.com/news/news_articles_2.webp", getElement(".news-swiper__card-img"));
    useGetImg("logo-1.svg", getElement(".footer__logo-img"));
    useGetImg("gs://nuts-17b69.appspot.com/31318052.webp", getElement(".error__img"));

    const popup = getElement(".popup__img", "all");
    const imgPopup = [
        "gs://nuts-17b69.appspot.com/product_card/box_cardboard_1.webp",
        "gs://nuts-17b69.appspot.com/product_card/box_cardboard_2.webp",
        "gs://nuts-17b69.appspot.com/product_card/box_cardboard_3.webp",
    ];
    for (let i = 0; i < popup.length; i++) {
        useGetImg(imgPopup[i], popup[i]);
    }

    const youTube = getElement(".manufacturing__preview-img", "all");
    const youTubeImg = [
        "gs://nuts-17b69.appspot.com/main_page/main_page-2.webp",
        "gs://nuts-17b69.appspot.com/companies/companies_2.webp",
    ];
    for (let i = 0; i < youTube.length; i++) {
        useGetImg(youTubeImg[i], youTube[i]);
    }
}
