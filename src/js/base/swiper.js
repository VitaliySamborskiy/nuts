import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { onYouTubeIframeAPIReady } from "./youtube-app.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

Swiper.use([Navigation]);

export function swiper(
    swiperBlock,
    buttonPrev,
    buttonNext,
    slidesPerView,
    spaceBetween,
    breakpoints = null,
    players = null,
    videoUrl = null,
    targetObserver = null,
    previewVideoElement = null,
) {
    const swiper = new Swiper(swiperBlock, {
        autoplay: {
            delay: 500,
        },
        slidesPerView: slidesPerView,
        spaceBetween: spaceBetween,
        breakpoints: breakpoints,
        loop: true,
        navigation: {
            nextEl: buttonNext,
            prevEl: buttonPrev,
        },
        on: {
            init: createPlayer,
            slideChange: (el) => {
                document.querySelectorAll(".swiper-slide").forEach((slide) => {
                    const youtubePlayer = slide.querySelector("iframe");
                    if (youtubePlayer) {
                        youtubePlayer.contentWindow.postMessage(
                            '{"event":"command","func":"pauseVideo","args":""}',
                            "*",
                        );
                    }
                });
            },
        },
    });

    function createPlayer() {
        if (players) {
            onYouTubeIframeAPIReady(videoUrl, players, targetObserver, previewVideoElement);
        }
    }
}
