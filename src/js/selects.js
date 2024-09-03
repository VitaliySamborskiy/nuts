import { select } from "./base/select.js";
import { getElement } from "./base/get-element-dom.js";

export function selects() {
    select(getElement(".header__select-language", "all"), getElement(".header__select", "all"));
    select(
        getElement(".product-filter__current-weight", "all"),
        getElement(".product-filter__select-weight", "all"),
    );
    select(
        getElement(".product-filter__current-taste", "all"),
        getElement(".product-filter__select-taste", "all"),
    );
    select(
        getElement(".registration__current-country", "all"),
        getElement(".registration__select-country", "all"),
    );
    select(
        getElement(".registration__current-region", "all"),
        getElement(".registration__select-region", "all"),
    );
    select(
        getElement(".registration__current-country-legal", "all"),
        getElement(".registration__select-country-legal", "all"),
    );
    select(
        getElement(".registration__current-region-legal", "all"),
        getElement(".registration__select-region-legal", "all"),
    );
    select(
        getElement(".registration__current-region-fop", "all"),
        getElement(".registration__select-region-fop", "all"),
    );
    select(
        getElement(".registration__current-country-fop", "all"),
        getElement(".registration__select-country-fop", "all"),
    );
}
