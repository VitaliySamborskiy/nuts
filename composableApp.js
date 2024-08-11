import { select } from "./src/js/base/select.js";
import { burgerMenu } from "./src/js/base/burger.js";
import { useGetImg } from "./src/js/base/useGetImg.js";
import { initializeFireBase } from "./src/js/base/useInstalizeFireBase.js";
import { useSetProduct, useGetFirestore } from "./src/js/base/useGetFierstore.js";
import { swiper } from "./src/js/base/swiper.js";
import { useRenderCards } from "./src/js/base/use-render-cards.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = await initializeFireBase();
    select();
    burgerMenu();
    const data = await useGetFirestore(app, "products");
    console.log(data);
    useRenderCards(data, document.querySelector(".product__cards"));
    useGetImg("logo-1.svg", document.querySelector(".header__center-logo"));
    useGetImg("logo-1.svg", document.querySelector(".burger__logo-img"));
    useGetImg("user.svg", document.querySelector(".header__top-img"));
    useGetImg("user.svg", document.querySelector(".burger__img"));
    useGetImg(
        "gs://nuts-17b69.appspot.com/main_page/main_page-1.webp",
        document.querySelector(".homepage__img"),
    );
    swiper(".swiper", ".product__card-button-prev", ".product__card-button-next");
    // useGetImg(
    //     "gs://nuts-17b69.appspot.com/product_card/box_cardboard_1.webp",
    //     document.querySelector(".product__slide-1"),
    // );
    // useGetImg(
    //     "gs://nuts-17b69.appspot.com/product_card/box_cardboard_1.webp",
    //     document.querySelector(".product__slide-2"),
    // );
    // useGetImg(
    //     "gs://nuts-17b69.appspot.com/product_card/box_cardboard_1.webp",
    //     document.querySelector(".product__slide-3"),
    // );
    // await useSetProduct(app, "products-item-2", {
    //     action: false,
    //     art: "0091",
    //     cationPrice: null,
    //     energyValue: 654,
    //     expirationDate: "12 месяцев",
    //     imgUrl: "gs://nuts-17b69.appspot.com/product_card/box_cardboard_2.webp",
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
    //     newProduct: true,
    //     nutsType: "Грецкий орех",
    //     packaging: "обычная",
    //     priсe: 21,
    //     text: "Грецкий орех является ценным продуктом, который люди употребляют уже более 4000 лет. Он особенно полезен для людей, перенесших операции, детей, кормящих матерей и беременных женщин. Грецкие орехи помогают восстановить силы, укрепить иммунитет, а также бороться с такими заболеваниями, как туберкулез и кашель. Для повышения эффективности грецкие орехи очищенные и отборные рекомендуется растолочь и смешать с медом в пропорции 2:1. Полученную целебную смесь рекомендуется принимать по одной чайной ложке перед едой.|Кроме того, грецкие орехи богаты антиоксидантами и жирными кислотами омега-3, которые играют ключевую роль в поддержании когнитивных функций и защите организма от хронических заболеваний. Употребление грецких орехов в разумных количествах может также способствовать нормализации уровня холестерина и улучшению работы мозга. Это делает их незаменимой частью рациона для людей всех возрастов, особенно в периоды повышенной физической и умственной нагрузки.",
    //     title: "Орех сладкий в глазурі",
    //     weight: "45г",
    // });
});
