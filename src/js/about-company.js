import { useGetFirestore } from "./base/useGetFierstore.js";
import { setupApp } from "./main.js";
import { useRenderNewsCards } from "./base/news-render-cards.js";
import { getElement } from "./base/get-element-dom.js";
import { useGetImg } from "./base/useGetImg.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = await setupApp();
    useRenderNewsCards(await useGetFirestore(app, "news"), getElement(".news-swiper__renders"));
    useGetImg("gs://nuts-17b69.appspot.com/companies/companies_1.webp", getElement(".company-page__img"));
    useGetImg("gs://nuts-17b69.appspot.com/companies/companies_4.webp", getElement(".company-page-eco__img"));
});
