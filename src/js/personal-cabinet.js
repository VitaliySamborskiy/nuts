import { useMenuPopup } from "./personal-cabinet/popup-menu.js";
import { getElement } from "./base/get-element-dom.js";
import { useGetImg } from "./base/use-img.js";
import { useInputClear } from "./base/input-clear.js";
import { buttonChange } from "./personal-cabinet/button-cange.js";
import { userService } from "./base/user-service.js";
import { fireBaseService } from "./base/fire-base-service.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = fireBaseService.getApp();

    useGetImg("gs://nuts-17b69.appspot.com/avatar.webp", getElement(".personal-cabinet__img"));

    setTimeout(() => {
        let userData = userService.getUser();

        buttonChange(
            getElement(".personal-cabinet__link", "all"),
            userData,
            app,
            getElement(".personal-cabinet__block-list"),
        );
    }, 600);

    useMenuPopup(
        getElement(".personal-cabinet__button"),
        getElement(".personal-cabinet__block-list"),
        getElement(".personal-cabinet__menu-cross"),
        "personal-cabinet__block-list_active",
    );

    useInputClear(getElement(".input__area", "all"));
    buttonChange(getElement(".personal-cabinet__link", "all"));
});
