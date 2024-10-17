import { useGetImg } from "./fire-base-functions/use-img.js";
import { getElement } from "./get-element-dom.js";
import { signOutUser } from "./autintificate.js";

export function useRenderUserInfo(data, container) {
    let html = ``;
    html += `<a class="header__top-name-link" href="/nuts/src/pages/personal-cabinet-page.html"><img class="header__top-img" src="" alt="avatar" loading="lazy"/>
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
        signOutUser();
    });
}
