import { useGetImg } from "./base/fire-base-functions/use-img.js";
import { getElement } from "./base/get-element-dom.js";
import { useGetFirestore } from "./base/fire-base-functions/use-fire-store.js";
import { useGalleryRenders } from "./gallery/gallery.js";
import { fireBaseService } from "./base/services/fire-base-service.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = fireBaseService.getApp();

    await useGetImg("gs://nuts-17b69.appspot.com/gallery/gallery_1.webp", getElement(".gallery-page__img"));

    const galleryInfo = await useGetFirestore(app, "gallery");
    useGalleryRenders(getElement(".gallery__box"), galleryInfo, getElement(".gallery__button-load "));
});
