import { useGetImg } from "./use-img.js";
import { onYouTubeIframeAPIReady } from "./youtube-app.js";
import { getElement } from "./get-element-dom.js";

export function useGalleryRenders(containers, dataArr, button) {
    dataArr.sort((a, b) => a.index - b.index);
    console.log(dataArr);
    rendersCardGallery(dataArr, containers);

    if (button) {
        button.addEventListener("click", () => {
            rendersCardGallery(dataArr, containers);
        });
    }
}

function rendersCardGallery(dataArr, containers) {
    let fragment = document.createDocumentFragment();

    const arr = dataArr.splice(0, 6);

    if (arr.length !== 0) {
        arr.forEach((data, index) => {
            if (data.urlImg) {
                fragment.appendChild(rendersImageCard(data, index));
            } else {
                fragment.appendChild(rendersVideoCard(data, index));
            }
        });

        const div = document.createElement("div");
        div.classList.add("gallery__block-items");
        div.appendChild(fragment);
        containers.appendChild(div);

        const youtubeFrame = getElement(".gallery__player", "all");
        const ytIds = Array.from(youtubeFrame).map((el) => el.getAttribute("data-id"));

        onYouTubeIframeAPIReady(
            ytIds,
            getElement(".gallery__player", "all"),
            getElement(".gallery__youtube-container", "all"),
            getElement(".gallery__preview", "all"),
            "gallery__preview_active",
        );
    }
}

function rendersImageCard(data, index) {
    let html = ``;
    html = `<picture class="gallery__img-block">
            <img class="gallery__img" src="" />
        </picture>
        <div class="gallery__card-block">
            <div class="gallery__card-block-text">
                <h3 class="gallery__card-title">${data.title}</h3>
                <p class="gallery__card-text">
                   ${data.text}
                </p>
            </div>
        </div>
        <div class="gallery__background"><svg class="gallery__svg"><use href="#logo"></use></svg></div>`;

    const div = document.createElement("div");
    div.className = `gallery__block gallery__item-${++index}`;
    div.innerHTML = html;

    useGetImg(data.urlImg, div.querySelector(".gallery__img"));

    return div;
}

function rendersVideoCard(data, index) {
    let html = ``;
    html = `<div class="gallery__preview">
                        <picture class="gallery__preview-img-block">
                            <img class="gallery__preview-img" src="" />
                        </picture>
                        <button class='play-button gallery__play ${++index % 6 == 0 || data.mini ? "gallery__play-mini" : ""}'>
                            <svg class='play-button-svg gallery__play-svg'><use href=#play></use></svg>
                        </button>
                        <div class="gallery__preview-text-block">
                            <h2 class="gallery__preview-title">${data.title}</h2>
                            <p class="gallery__preview-text">
                                ${data.text}
                            </p>
                        </div>
                        <div class="gallery__preview-background"></div>
                    </div>
                    <div class="gallery__player" data-id="${data.urlVideo}"></div>`;

    const div = document.createElement("div");
    div.className = `gallery__youtube-container gallery__item-${index} ${index % 6 == 0 || data.mini ? "gallery__youtube-container-mini" : ""}`;
    div.innerHTML = html;

    useGetImg(data.previewUrl, div.querySelector(".gallery__preview-img"));
    return div;
}
