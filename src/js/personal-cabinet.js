import { useMenuPopup } from "./personal-cabinet/popup-menu.js";
import { getElement } from "./base/get-methods/get-element-dom.js";
import { useGetImg } from "./base/fire-base-functions/use-img.js";
import { useInputClear } from "./base/forms-methods/input-clear.js";
import { buttonChange } from "./personal-cabinet/button-cange.js";
import { userService } from "./base/services/user-service.js";
import { fireBaseService } from "./base/services/fire-base-service.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = fireBaseService.getApp();

    setTimeout(() => {
        let userData = userService.getUser();

        buttonChange(
            getElement(".personal-cabinet__link", "all"),
            userData,
            app,
            getElement(".personal-cabinet__block-list"),
        );
    }, 550);

    useMenuPopup(
        getElement(".personal-cabinet__button"),
        getElement(".personal-cabinet__block-list"),
        getElement(".personal-cabinet__menu-cross"),
        "personal-cabinet__block-list_active",
    );

    useInputClear(getElement(".input__area", "all"));
    try {
        useGetImg("gs://nuts-17b69.appspot.com/avatar.webp", getElement(".personal-cabinet__img"));
    } catch (error) {
        console.log(error);
    }
});
