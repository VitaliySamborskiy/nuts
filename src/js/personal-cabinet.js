import { useMenuPopup } from "./personal-cabinet/popup-menu.js";
import { getElement } from "./base/get-element-dom.js";
import { useGetImg } from "./base/use-img.js";
import { useInputClear } from "./base/input-clear.js";
import { buttonChange } from "./personal-cabinet/button-cange.js";
import { rendersContactInformation } from "./personal-cabinet/renders-contact-information.js";
import { userService } from "./base/user-service.js";
import { fireBaseService } from "./base/fire-base-service.js";
import { renderTable } from "./personal-cabinet/renders-tablet.js";
import { rendersAddressForm } from "./personal-cabinet/renders-address-form.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = fireBaseService.getApp();

    useGetImg("gs://nuts-17b69.appspot.com/avatar.webp", getElement(".personal-cabinet__img"));

    setTimeout(() => {
        let userDate = userService.getUser();

        renderTable(getElement(".personal-cabinet__renders-area"), getElement("table", "id"));
        rendersContactInformation(
            userDate,
            getElement(".personal-cabinet__renders-area"),
            getElement("contactInformation", "id"),
            app,
        );
        rendersAddressForm(getElement(".personal-cabinet__renders-area"), getElement("addressForm", "id"), userDate);
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
