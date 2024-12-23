import { burgerMenu } from "./base/burger.js";
import { getImages } from "./get-images.js";
import { selects } from "./selects.js";
import { useUserStateChanged } from "./base/autintificate.js";
import { fireBaseService } from "./base/services/fire-base-service.js";
// import { mapObserver } from "./base/load-google-map.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = fireBaseService.getApp();
    selects();
    burgerMenu();
    // mapObserver();
    await useUserStateChanged();
    getImages();
});
