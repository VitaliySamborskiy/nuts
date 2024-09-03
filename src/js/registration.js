import { selectRegion } from "./registration/select-region-active.js";
import { getElement } from "./base/get-element-dom.js";
import { useInputActive } from "./registration/input-active.js";
import { usePhotoReplacement } from "./registration/photo-replacement.js";
import { useFormChange, useFormChangeRadio } from "./registration/form-change.js";
import { useRegistrationValidate } from "./registration/form-registration-validate.js";

document.addEventListener("DOMContentLoaded", async function () {
    useRegistrationValidate(
        getElement("registrationForms", "id"),
        getElement(".registration__input", "all"),
        getElement(".registration__label", "all"),
    );
    useInputActive(
        getElement(".registration__input", "all"),
        getElement(".registration__label", "all"),
    );
    usePhotoReplacement(
        getElement(".registration__input-img"),
        getElement(".registration__photo-input"),
    );
    useFormChange(
        getElement(".registration__tab-text", "all"),
        getElement(".registration__option-form", "all"),
    );
    useFormChangeRadio(
        getElement(".registration__change-form", "all"),
        getElement(".registration__option-sub-form", "all"),
    );
    selectRegion(
        getElement(".registration__current-country"),
        getElement(".registration__select-body-wrapper", "all"),
        getElement(".registration__current-region"),
        getElement(".region"),
    );
    selectRegion(
        getElement(".registration__current-country-legal"),
        getElement(".registration__select-body-wrapper", "all"),
        getElement(".registration__current-region-legal"),
        getElement(".region-legal"),
    );
});
