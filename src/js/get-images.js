import { useImg } from "./base/use-img.js";
import { getElement } from "./base/get-element-dom.js";

export function getImages() {
    useImg("logo-1.svg", getElement(".header__center-logo"));
    useImg("logo-1.svg", getElement(".burger__logo-img"));
    useImg("user.svg", getElement(".header__top-img"));
    useImg("user.svg", getElement(".burger__img"));
    useImg("gs://nuts-17b69.appspot.com/main_page/main_page-1.webp", getElement(".homepage__img"));
    useImg("gs://nuts-17b69.appspot.com/main_page/main_page-3.webp", getElement(".main-goal__img"));
    useImg("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_1.webp", getElement(".benefits__nuts"));
    useImg("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_2.webp", getElement(".benefits__hazelnut"));
    useImg("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_3.webp", getElement(".benefits__rosehip"));
    useImg("gs://nuts-17b69.appspot.com/main_page/main_page-4.webp", getElement(".eco__img"));
    useImg("gs://nuts-17b69.appspot.com/news/news_articles_2.webp", getElement(".news-swiper__card-img"));
    useImg("logo-1.svg", getElement(".footer__logo-img"));
    useImg("gs://nuts-17b69.appspot.com/31318052.webp", getElement(".error__img"));
    useImg("gs://nuts-17b69.appspot.com/product_catalog/product_catalog_1.webp", getElement(".products-page__img"));
    const productCatalogImages = [
        "gs://nuts-17b69.appspot.com/product_catalog/product_catalog_2.webp",
        "gs://nuts-17b69.appspot.com/main_page/main_page-2.webp",
        "gs://nuts-17b69.appspot.com/companies/companies_2.webp",
    ];
    const productCatalogElement = getElement(".eco-nuts__img", "all");
    for (let i = 0; i < productCatalogElement.length; i++) {
        useImg(productCatalogImages[i], productCatalogElement[i]);
    }
    useImg("gs://nuts-17b69.appspot.com/avatar.webp", getElement(".registration__input-img"));

    const popup = getElement(".popup__img", "all");
    const imgPopup = [
        "gs://nuts-17b69.appspot.com/product_card/box_cardboard_1.webp",
        "gs://nuts-17b69.appspot.com/product_card/box_cardboard_2.webp",
        "gs://nuts-17b69.appspot.com/product_card/box_cardboard_3.webp",
    ];
    for (let i = 0; i < popup.length; i++) {
        useImg(imgPopup[i], popup[i]);
    }

    const youTube = getElement(".manufacturing__preview-img", "all");
    const youTubeImg = [
        "gs://nuts-17b69.appspot.com/main_page/main_page-2.webp",
        "gs://nuts-17b69.appspot.com/companies/companies_2.webp",
    ];
    for (let i = 0; i < youTube.length; i++) {
        useImg(youTubeImg[i], youTube[i]);
    }
}
