import { fireBaseService } from "./base/fire-base-service.js";
import { useGetImg } from "./base/use-img.js";
import { getElement } from "./base/get-element-dom.js";
import { tabSection } from "./base/tabs.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = fireBaseService.getApp();

    useGetImg(
        "gs://nuts-17b69.appspot.com/corporate_clients/corporate_clients_1.webp",
        getElement(".corporate-clients-page__img"),
    );
    useGetImg("gs://nuts-17b69.appspot.com/corporate_clients/corporate_clients_3.webp", getElement(".eco__img"));

    let imgTab = [
        "gs://nuts-17b69.appspot.com/corporate_clients/corporate_clients_2.webp",
        "gs://nuts-17b69.appspot.com/corporate_clients/corporate_clients_4.webp",
        "gs://nuts-17b69.appspot.com/corporate_clients/corporate_clients_5.webp",
        "gs://nuts-17b69.appspot.com/corporate_clients/corporate_clients_6.webp",
        "gs://nuts-17b69.appspot.com/corporate_clients/corporate_clients_7.webp",
    ];

    let imgTabElement = getElement(".forms-cooperation__img", "all");

    imgTab.forEach((value, index) => useGetImg(value, imgTabElement[index]));

    tabSection(
        getElement(".forms-cooperation__tab-button", "all"),
        getElement(".forms-cooperation__tab", "all"),
        "forms-cooperation__tab-button_active",
        "forms-cooperation__tab-svg_active",
        "forms-cooperation__tab_active",
    );
});
