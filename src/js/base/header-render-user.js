import { useGetImg } from "./use-img.js";
import { getElement } from "./get-element-dom.js";

export function useRenderUserInfo(data, container) {
    let html = ``;
    html += `<a class="header__top-name-link" href="/nuts/src/pages/personal-cabinet-page.html"><img class="header__top-img" src="" />
            <span class="header__top-name">${data.displayName}</span>               
           </a>
          <button class="header__top-remove-block"
              ><svg class="header__top-remove-svg"><use href="#exit"></use></svg><span class="header__top-remove-text">Вихід</span></button
          >`;

    container.innerHTML = html;

    useGetImg(data.photoURL, getElement(".header__top-img"));
    useRenderDefaultInfo(getElement(".header__top-authentication-wrapper"), getElement(".header__top-remove-block"));
}

export function useRenderDefaultInfo(container, button) {
    button.addEventListener("click", () => {
        window.location.pathname = "/nuts/index.html";

        let html = ``;
        html = ` <a class="header__top-entrance" href="/nuts/src/pages/login.html">
            <svg class="header__top-svg"><use href="#authentication"></use></svg>
            <span class="header__top-text-entrance">Вход</span></a
        >
        <a class="header__top-registration" href="/nuts/src/pages/registration.html"
            >Регистрация</a
        >`;

        container.innerHTML = html;
    });
}
