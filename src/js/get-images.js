import { useGetImg } from "./base/useGetImg.js";
import { getElement } from "./base/get-element-dom.js";

export function getImages() {
    useGetImg("logo-1.svg", getElement(".header__center-logo"));
    useGetImg("logo-1.svg", getElement(".burger__logo-img"));
    useGetImg("user.svg", getElement(".header__top-img"));
    useGetImg("user.svg", getElement(".burger__img"));
    useGetImg(
        "gs://nuts-17b69.appspot.com/main_page/main_page-1.webp",
        getElement(".homepage__img"),
    );
    useGetImg(
        "gs://nuts-17b69.appspot.com/main_page/main_page-3.webp",
        getElement(".main-goal__img"),
    );
    useGetImg(
        "gs://nuts-17b69.appspot.com/main_page/main_page-benefit_1.webp",
        getElement(".benefits__nuts"),
    );
    useGetImg(
        "gs://nuts-17b69.appspot.com/main_page/main_page-benefit_2.webp",
        getElement(".benefits__hazelnut"),
    );
    useGetImg(
        "gs://nuts-17b69.appspot.com/main_page/main_page-benefit_3.webp",
        getElement(".benefits__rosehip"),
    );
    useGetImg("gs://nuts-17b69.appspot.com/main_page/main_page-4.webp", getElement(".eco__img"));
    useGetImg(
        "gs://nuts-17b69.appspot.com/news/news_articles_2.webp",
        getElement(".news-swiper__card-img"),
    );
    useGetImg("logo-1.svg", getElement(".footer__logo-img"));
    useGetImg("gs://nuts-17b69.appspot.com/31318052.webp", getElement(".error__img"));
    useGetImg(
        "gs://nuts-17b69.appspot.com/product_catalog/product_catalog_1.webp",
        getElement(".products-page__img"),
    );
    const productCatalogImages = [
        "gs://nuts-17b69.appspot.com/product_catalog/product_catalog_2.webp",
        "gs://nuts-17b69.appspot.com/main_page/main_page-2.webp",
        "gs://nuts-17b69.appspot.com/companies/companies_2.webp",
    ];
    const productCatalogElement = getElement(".eco-nuts__img", true);
    for (let i = 0; i < productCatalogElement.length; i++) {
        useGetImg(productCatalogImages[i], productCatalogElement[i]);
    }
    useGetImg("gs://nuts-17b69.appspot.com/avatar.webp", getElement(".registration__input-img"));
}
