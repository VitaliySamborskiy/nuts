import{u as p,g as a,a as s,s as o,f as u}from"./main-DTtcJXsG.js";import{u as m,a as g}from"./product-cards-vMqPgBCD.js";import{u as c}from"./news-render-cards-DVIJnVzo.js";import"./local-storage-Dq6mamxl.js";document.addEventListener("DOMContentLoaded",async function(){const n=u.getApp();p("gs://nuts-17b69.appspot.com/main_page/main_page-1.webp",a(".homepage__img")),p("gs://nuts-17b69.appspot.com/main_page/main_page-3.webp",a(".main-goal__img")),p("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_1.webp",a(".benefits__nuts")),p("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_2.webp",a(".benefits__hazelnut")),p("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_3.webp",a(".benefits__rosehip")),p("gs://nuts-17b69.appspot.com/main_page/main_page-4.webp",a(".eco__img"));const t=a(".manufacturing__preview-img","all"),_=["gs://nuts-17b69.appspot.com/main_page/main_page-2.webp","gs://nuts-17b69.appspot.com/companies/companies_2.webp"];for(let e=0;e<t.length;e++)p(_[e],t[e]);const i=await s(n,"products"),r=await s(n,"videoId","main-pages");c(await s(n,"news"),a(".news-swiper__renders")),o(a(".manufacturing__swiper-video"),a(".manufacturing__button-prev"),a(".manufacturing__button-next"),"auto",0,null,a(".manufacturing__player","all"),r.mainPage,a(".manufacturing__swiper","all"),a(".manufacturing__preview-img-block","all"),"manufacturing__preview-img-block_active"),m(i,a(".product__cards")).forEach(e=>{o(e.swiper,e.prev,e.next,"auto",0)}),g(a(".product__cards"),a(".popup__content"),a(".popup__background-block"),a(".popup__cross"),i)});
