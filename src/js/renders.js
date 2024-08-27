import { useGetFirestore } from "./base/useGetFierstore.js";
import { useRenderCards } from "./base/use-render-cards.js";
import { useRenderNewsCards } from "./base/news-render-cards.js";
import { getElement } from "./base/get-element-dom.js";
import { swiper } from "./base/swiper.js";

export async function renders(app) {
    const dataProducts = await useGetFirestore(app, "products");
    const dataNews = await useGetFirestore(app, "news");
    const swipersCard = useRenderCards(dataProducts, getElement(".product__cards"));
    swipersCard.forEach((element) => {
        swiper(element.swiper, element.prev, element.next, "auto", 0);
    });
    // useRenderNewsCards(dataNews, getElement(".news-swiper__renders"));
}
