import { selectRegion } from "./registration/select-region-active.js";
import { getElement } from "./base/get-element-dom.js";
import { useInputActive } from "./registration/input-active.js";
import { usePhotoReplacement } from "./registration/photo-replacement.js";
import { useFormChange, useFormChangeRadio } from "./registration/form-change.js";
import { useRegistrationValidate } from "./registration/form-registration-validate.js";

document.addEventListener("DOMContentLoaded", async function () {
    useInputActive(getElement(".registration__input", true));
    usePhotoReplacement(
        getElement(".registration__input-img"),
        getElement(".registration__photo-input"),
    );
    useFormChange(
        getElement(".registration__tab-text", true),
        getElement(".registration__option-form", true),
    );
    useFormChangeRadio(
        getElement(".registration__change-form", true),
        getElement(".registration__option-sub-form", true),
    );
    selectRegion(
        getElement(".registration__current-country"),
        getElement(".registration__select-body-wrapper", true),
        getElement(".registration__current-region"),
        getElement(".region"),
    );
    selectRegion(
        getElement(".registration__current-country-legal"),
        getElement(".registration__select-body-wrapper", true),
        getElement(".registration__current-region-legal"),
        getElement(".region-legal"),
    );
    useRegistrationValidate(getElement(".registration__forms"));
});
