import { setupApp } from "./main.js";
import { useMenuPopup } from "./personal-cabinet/popup-menu.js";
import { getElement } from "./base/get-element-dom.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = await setupApp();
    useMenuPopup(
        getElement(".personal-cabinet__button"),
        getElement(".personal-cabinet__block-list"),
        getElement(".personal-cabinet__menu-cross"),
        "personal-cabinet__block-list_active",
    );
});
