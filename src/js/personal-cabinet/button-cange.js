import { useGetQueryParameter, useSetQueryParameter } from "../base/querry-parameter.js";
import { getElement } from "../base/get-element-dom.js";
import { renderOrderTable, renderTableTransaction } from "./renders-tablet.js";
import { rendersContactInformation } from "./renders-contact-information.js";
import { renderPasswordForm } from "./render-password-form.js";
import { rendersAddressForm } from "./renders-address-form.js";

let queryParameter;

export function buttonChange(buttons, userData, app, popupBody) {
    if (window.location.search !== "") {
        buttons.forEach((btn) => {
            btn.classList.remove("personal-cabinet__link_active");
        });
        activeRenderSwitch(app, userData);
        getElement(queryParameter.tabButton, "id").classList.add("personal-cabinet__link_active");
    } else {
        activeRenderSwitch(app, userData);
    }

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            buttons.forEach((btn) => {
                btn.classList.remove("personal-cabinet__link_active");
            });

            event.currentTarget.classList.add("personal-cabinet__link_active");
            useSetQueryParameter(["tabButton"], [event.currentTarget.id]);
            activeRenderSwitch(app, userData);
            popupBody.classList.remove("personal-cabinet__block-list_active");
        });
    });
}

function activeRenderSwitch(app, userData) {
    queryParameter = useGetQueryParameter(["tabButton"], ["tabButton"]);

    switch (queryParameter.tabButton) {
        case "tableOrder":
            renderOrderTable(getElement(".personal-cabinet__renders-area"));
            break;
        case "tableTransaction":
            renderTableTransaction(getElement(".personal-cabinet__renders-area"));
            break;
        case "contactInformation":
            rendersContactInformation(userData, getElement(".personal-cabinet__renders-area"), app);
            break;
        case "passwordUser":
            renderPasswordForm(getElement(".personal-cabinet__renders-area"));
            break;
        case "addressForm":
            rendersAddressForm(getElement(".personal-cabinet__renders-area"), userData, app);
            break;

        default:
            renderOrderTable(getElement(".personal-cabinet__renders-area"));
            getElement("tableOrder", "id").classList.add("personal-cabinet__link_active");
            break;
    }
}
