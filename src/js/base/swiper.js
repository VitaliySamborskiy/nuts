import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

Swiper.use([Navigation]);

export function swiper(swiperBlock, buttonPrev, buttonNext) {
    const swiper = new Swiper(swiperBlock, {
        slidesPerView: "auto",
        autoplay: {
            delay: 500,
        },
        loop: true,

        navigation: {
            nextEl: buttonNext,
            prevEl: buttonPrev,
        },
    });
}
