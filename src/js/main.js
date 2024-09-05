import { burgerMenu } from "./base/burger.js";
import { initializeFireBase } from "./base/useInstalizeFireBase.js";
import { useSetProduct, useGetFirestore, useSetNews } from "./base/useGetFierstore.js";
import { getImages } from "./get-images.js";
import { swiperInit } from "./swiper-init.js";
import { selects } from "./selects.js";

let app;

export async function setupApp() {
    if (!app) {
        app = await initializeFireBase();
    }
    return app;
}

document.addEventListener("DOMContentLoaded", async function () {
    await setupApp();
    getImages();
    selects();
    burgerMenu();
    await swiperInit(app);
});
