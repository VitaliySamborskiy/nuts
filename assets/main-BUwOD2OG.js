import{s as r,g as a,u as e,a as t}from"./main-_zEzRe2m.js";import{u as n}from"./use-fire-store-DHc80lR4.js";import{u,a as m}from"./product-cards-Dr4II-xa.js";import{u as g}from"./news-render-cards-BiW0EPI9.js";document.addEventListener("DOMContentLoaded",async function(){const p=await r(),i=await n(p,"videoId","main-pages"),o=a(".manufacturing__player","all"),_=await n(p,"news");g(_,a(".news-swiper__renders")),e("gs://nuts-17b69.appspot.com/main_page/main_page-1.webp",a(".homepage__img")),e("gs://nuts-17b69.appspot.com/main_page/main_page-3.webp",a(".main-goal__img")),e("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_1.webp",a(".benefits__nuts")),e("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_2.webp",a(".benefits__hazelnut")),e("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_3.webp",a(".benefits__rosehip")),e("gs://nuts-17b69.appspot.com/main_page/main_page-4.webp",a(".eco__img")),t(a(".manufacturing__swiper-video"),a(".manufacturing__button-prev"),a(".manufacturing__button-next"),"auto",0,null,o,i.mainPage,a(".manufacturing__swiper"),a(".manufacturing__preview-img-block","all"),"manufacturing__preview-img-block_active"),u(await n(p,"products"),a(".product__cards")).forEach(s=>{t(s.swiper,s.prev,s.next,"auto",0)}),m(a(".product__cards"),a(".popup__content"),a(".popup__background-block"),a(".popup__cross"))});
