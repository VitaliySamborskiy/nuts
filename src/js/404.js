import { useGetImg } from "./base/fire-base-functions/use-img.js";
import { getElement } from "./base/get-methods/get-element-dom.js";
import { fireBaseService } from "./base/services/fire-base-service.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = fireBaseService.getApp();
    useGetImg("gs://nuts-17b69.appspot.com/31318052.webp", getElement(".error__img"));
});
