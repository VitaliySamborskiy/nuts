import { useGetImg } from "./base/fire-base-functions/use-img.js";
import { getElement } from "./base/get-methods/get-element-dom.js";

export function getImages() {
    useGetImg("logo-1.svg", getElement(".header__center-logo"));
    useGetImg("logo-1.svg", getElement(".burger__logo-img"));
    useGetImg("user.svg", getElement(".header__top-img"));
    useGetImg("user.svg", getElement(".burger__img"));
    useGetImg("gs://nuts-17b69.appspot.com/31318052.webp", getElement(".error__img"));
}
