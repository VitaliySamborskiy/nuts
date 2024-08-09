import { select } from "./src/js/base/select.js";
import { burgerMenu } from "./src/js/base/burger.js";
import { useGetImg } from "./src/js/base/useFierBase.js";
import { initializeFireBase } from "./src/js/base/useInstalizeFireBase.js";

document.addEventListener("DOMContentLoaded", async function () {
    await initializeFireBase();
    select();
    burgerMenu();
    useGetImg("logo-1.svg", document.querySelector(".header__center-logo"));
    useGetImg("logo-1.svg", document.querySelector(".burger__logo-img"));
    useGetImg("user.svg", document.querySelector(".header__top-img"));
    useGetImg("user.svg", document.querySelector(".burger__img"));
    useGetImg(
        "gs://nuts-17b69.appspot.com/main_page/main_page-1.webp",
        document.querySelector(".homepage__img"),
    );
});
