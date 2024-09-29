import { setupApp } from "./main.js";
import { useGetImg } from "./base/use-img.js";
import { getElement } from "./base/get-element-dom.js";
import { useGetFirestore } from "./base/use-fire-store.js";
import { useGalleryRenders } from "./gallery/gallery.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = await setupApp();

    useGetImg("gs://nuts-17b69.appspot.com/gallery/gallery_1.webp", getElement(".gallery-page__img"));

    const galleryInfo = await useGetFirestore(app, "gallery");
    useGalleryRenders(getElement(".gallery__box"), galleryInfo, getElement(".gallery__button-load "));
});
