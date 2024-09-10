import { useInputActive } from "./registration/input-active.js";
import { getElement } from "./base/get-element-dom.js";

document.addEventListener("DOMContentLoaded", async function () {
    useInputActive(getElement(".input__area", "all"), getElement(".input__label", "all"));
});
