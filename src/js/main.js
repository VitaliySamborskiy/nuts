import { burgerMenu } from "./base/burger.js";
import { getImages } from "./get-images.js";
import { swiperInit } from "./swiper-init.js";
import { selects } from "./selects.js";
import { useUserStateChanged } from "./base/autintificate.js";
import { fireBaseService } from "./base/fire-base-service.js";
// import { notificationsInit } from "./base/notifications.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = fireBaseService.getApp();
    getImages();
    selects();
    burgerMenu();
    await swiperInit(app);
    await useUserStateChanged();
    // notificationsInit();
});
