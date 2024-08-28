import { select } from "./base/select.js";
import { getElement } from "./base/get-element-dom.js";

export function selects() {
    select(getElement(".header__select-language", true), getElement(".header__select", true));
    select(
        getElement(".product-filter__current-weight", true),
        getElement(".product-filter__select-weight", true),
    );
    select(
        getElement(".product-filter__current-taste", true),
        getElement(".product-filter__select-taste", true),
    );
    select(
        getElement(".registration__current-country", true),
        getElement(".registration__select-country", true),
    );
    select(
        getElement(".registration__current-region", true),
        getElement(".registration__select-region", true),
    );
}
