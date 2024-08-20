import { select } from "./base/select.js";
import { burgerMenu } from "./base/burger.js";
import { initializeFireBase } from "./base/useInstalizeFireBase.js";
import { useSetProduct, useGetFirestore, useSetNews } from "./base/useGetFierstore.js";
import { getImages } from "./get-images.js";
import { swiperInit } from "./swiper-init.js";
import { renders } from "./renders.js";

document.addEventListener("DOMContentLoaded", async function () {
    const app = await initializeFireBase();
    getImages();
    select();
    burgerMenu();
    await swiperInit(app);
    await renders(app);

    // await useSetNews(app, "tradeExportForum", {
    //     date: "13.09.2019",
    //     mainTitle: "В Одесской области состоялся масштабный торгово - экспортный форум",
    //     url: [
    //         "gs://nuts-17b69.appspot.com/news/news_articles_3.webp",
    //         "gs://nuts-17b69.appspot.com/news/news_articles_1.webp",
    //     ],
    //     summary:
    //         "Пользу для здоровья. Шиповник богат витаминами, особенно витамином C, который укрепляет иммунную систему и помогает бороться с простудными заболеваниями. Кроме того, его плоды содержат антиоксиданты, которые замедляют процессы старения и поддерживают здоровье кожи. Однако многие садоводы недооценивают его как декоративное растение. Шиповник привлекает не только своей пользой, но и красотой: его яркие цветы украшают сад весной и летом, а осенью кусты покрываются насыщенными красными плодами, которые придают участку особый шарм.В Европе шиповник активно используется не только в медицине, но и в кулинарии. Из его плодов готовят варенье, компоты и даже ликеры. Возможно, пришло время и нашим садоводам обратить внимание на эту культуру и использовать её потенциал в полной мере.",
    // });
    // await useSetNews(app, "organicProducerCertification", {
    //     date: "17.03.2021",
    //     mainTitle: "Сертификация органического производителя",
    //     url: [
    //         "gs://nuts-17b69.appspot.com/news/news_articles_4.webp",
    //         "gs://nuts-17b69.appspot.com/news/news_articles_6.webp",
    //     ],
    //     summary:
    //         "Наш сельскохозяйственный обслуживающий кооператив «Орех Причерноморья» был основан в 2012-ом году для закладки смешанного сада грецкого ореха и фундука. На данный момент во владении нашей компании находится 1 гектар тепличной площади и 270 гектар садовой площади, которую мы планируем расширять. «Орех Причерноморья» включен в реестр Министерства Аграрной Политики Украины.",
    // });
    // await useSetNews(app, "sialParis", {
    //     date: "27.08.2021",
    //     mainTitle: "SIAL Paris 2018",
    //     url: [
    //         "gs://nuts-17b69.appspot.com/news/news_articles_8.webp",
    //         "gs://nuts-17b69.appspot.com/news/news_articles_4.webp",
    //     ],
    //     summary:
    //         "Наш сельскохозяйственный обслуживающий кооператив «Орех Причерноморья» был основан в 2012-ом году для закладки смешанного сада грецкого ореха и фундука. На данный момент во владении нашей компании находится 1 гектар тепличной площади и 270 гектар садовой площади, которую мы планируем расширять. «Орех Причерноморья» включен в реестр Министерства Аграрной Политики Украины.",
    // });
});
