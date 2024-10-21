import { useGetImg } from "./base/fire-base-functions/use-img.js";
import { getElement } from "./base/get-methods/get-element-dom.js";
import { fireBaseService } from "./base/services/fire-base-service.js";
import { tabSection } from "./base/tabs.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = fireBaseService.getApp();

    await useGetImg(
        "gs://nuts-17b69.appspot.com/payment_delivery/payment_delivery_1.webp",
        getElement(".payment-delivery__img"),
    );

    useGetImg("gs://nuts-17b69.appspot.com/payment_delivery/payment_delivery_2.webp", getElement(".order-tabs__img"));
    useGetImg("gs://nuts-17b69.appspot.com/main_page/main_page-3.webp", getElement(".main-goal__img"));
    let imgTab = [
        "gs://nuts-17b69.appspot.com/payment_delivery/payment_delivery_2.webp",
        "gs://nuts-17b69.appspot.com/payment_delivery/payment_delivery_4.webp",
        "gs://nuts-17b69.appspot.com/payment_delivery/payment_delivery_5.webp",
    ];
    let imgTabElement = getElement(".order-tabs__img", "all");
    imgTab.forEach((value, index) => useGetImg(value, imgTabElement[index]));

    tabSection(
        getElement(".order-tabs__tab-button", "all"),
        getElement(".order-tabs__body-block", "all"),
        "order-tabs__tab-button_active",
        "order-tabs__tab-svg_active",
        "order-tabs__body-block_active",
    );
});
