import{b as o,g as a,d as i,f as l}from"./main-CMvXffeB.js";import{u as n,a as t}from"./form-validate-DvYzVQYK.js";document.addEventListener("DOMContentLoaded",(async function(){const m=l.getApp();o(a(".input__area","all")),n(a(".input__area","all"),a(".input__label","all")),t(a("loginForm","id"),a(".login__input","all"),{loginEmail:{void:"не указана электронная почта!",regExp:"неверная почта отсутствует символ @ или неверный домен почты"},loginPassword:{void:"поле не заполнено",regExp:"пароль должен содержать латинские буквы A-Z, хотя бы одну цифру 0-9 и один специальный символ с #?!@$%^&*-"}},{loginEmail:/[0-9a-zа-яціїєґ\\.]+@(gmail\.com|outlook\.com|hotmail\.com|live\.com)+/gi,loginPassword:/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gi},i,a(".login__button"),[m,a(".login__form")])}));