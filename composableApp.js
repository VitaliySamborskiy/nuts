import { select } from "./src/js/base/select.js";
import { burgerMenu } from "./src/js/base/burger.js";
import { useGetImg } from "./src/js/base/useGetImg.js";
import { initializeFireBase } from "./src/js/base/useInstalizeFireBase.js";
import { useSetProduct, useGetFirestore } from "./src/js/base/useGetFierstore.js";
import { swiper } from "./src/js/base/swiper.js";
import { useRenderCards } from "./src/js/base/use-render-cards.js";
import { useYoutubeApp } from "./src/js/base/youtube-app.js";
import * as events from "node:events";

document.addEventListener("DOMContentLoaded", async function () {
    const app = await initializeFireBase();
    // await useSetProduct(app, "products-item-3", {
    //     action: true,
    //     art: "0092",
    //     cationPrice: 25,
    //     energyValue: 650,
    //     expirationDate: "24 месяцев",
    //     imgUrl: ["gs://nuts-17b69.appspot.com/product_card/box_cardboard_3.webp", "gs://nuts-17b69.appspot.com/product_card/box_cardboard_2.webp" ],
    //     ingredients: "Ядро грецкого ореха, вымытого очищенного от кожуры, соль экстра (раствор 7%)",
    //     list: [
    //         {
    //             title: "Другие полезные вещества грецких орехов:",
    //             items: "Антиоксиданты защищают печень от повреждений|Полифенолы не дают образоваться сосудистым тромбам|Нейропротекторы улучшают работу мозга, отодвигают старость",
    //         },
    //         {
    //             title: "Нужно систематически есть грецкие орехи, чтобы:",
    //             items: "На 30-40 % снизить риск заболевания раком простаты|На 50 % - раком молочной железы|Предотвратить дегенерацию глазной макулы, а значит, улучшить зрение|Отрегулировать обмен веществ, выработку инсулина; понизить количество сахара в крови",
    //         },
    //     ],
    //     newProduct:  false,
    //     nutsType: "Грецкий орех",
    //     packaging: "вакуумная",
    //     price: 40,
    //     text: "Грецкий орех является ценным продуктом, который люди употребляют уже более 4000 лет. Он особенно полезен для людей, перенесших операции, детей, кормящих матерей и беременных женщин. Грецкие орехи помогают восстановить силы, укрепить иммунитет, а также бороться с такими заболеваниями, как туберкулез и кашель. Для повышения эффективности грецкие орехи очищенные и отборные рекомендуется растолочь и смешать с медом в пропорции 2:1. Полученную целебную смесь рекомендуется принимать по одной чайной ложке перед едой.|Кроме того, грецкие орехи богаты антиоксидантами и жирными кислотами омега-3, которые играют ключевую роль в поддержании когнитивных функций и защите организма от хронических заболеваний. Употребление грецких орехов в разумных количествах может также способствовать нормализации уровня холестерина и улучшению работы мозга. Это делает их незаменимой частью рациона для людей всех возрастов, особенно в периоды повышенной физической и умственной нагрузки.",
    //     title: "Орех солоний",
    //     weight: "60г",
    // });
    select();
    burgerMenu();
    const data = await useGetFirestore(app, "products");
    const swipers = useRenderCards(data, document.querySelector(".product__cards"));
    swipers.forEach((element) => {
        swiper(element.swiper, element.prev, element.next);
    });
    swiper(
        document.querySelector(".manufacturing__swiper-video"),
        document.querySelector(".manufacturing__button-prev"),
        document.querySelector(".manufacturing__button-next"),
    );
    await useGetImg("logo-1.svg", document.querySelector(".header__center-logo"));
    await useGetImg("logo-1.svg", document.querySelector(".burger__logo-img"));
    await useGetImg("user.svg", document.querySelector(".header__top-img"));
    await useGetImg("user.svg", document.querySelector(".burger__img"));
    await useGetImg(
        "gs://nuts-17b69.appspot.com/main_page/main_page-1.webp",
        document.querySelector(".homepage__img"),
    );
    await useGetImg(
        "gs://nuts-17b69.appspot.com/main_page/main_page-3.webp",
        document.querySelector(".main-goal__img"),
    );

    const videoData = await useGetFirestore(app, "videoId", "main-pages");
    const playersMainPage = document.querySelectorAll(".manufacturing__player");
    for (let i = 0; i < videoData.main.length; ++i) {
        await useYoutubeApp(videoData.main[i], playersMainPage[i]);
    }

    await useGetImg(
        "gs://nuts-17b69.appspot.com/main_page/main_page-benefit_1.webp",
        document.querySelector(".benefits__nuts"),
    );
    await useGetImg(
        "gs://nuts-17b69.appspot.com/main_page/main_page-benefit_2.webp",
        document.querySelector(".benefits__hazelnut"),
    );
    await useGetImg(
        "gs://nuts-17b69.appspot.com/main_page/main_page-benefit_3.webp",
        document.querySelector(".benefits__rosehip"),
    );
});
