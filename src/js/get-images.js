import { useGetImg } from "./base/fire-base-functions/use-img.js";
import { getElement } from "./base/get-methods/get-element-dom.js";

export function getImages() {
    useGetImg("logo-1.svg", getElement(".header__center-logo"));
    useGetImg("logo-1.svg", getElement(".burger__logo-img"));
    useGetImg("logo-1.svg", getElement(".footer__logo-img"));
}
