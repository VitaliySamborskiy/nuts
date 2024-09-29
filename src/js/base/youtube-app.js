let target = new Map();
let previewVideo = new Map();
let players = new Map();

export function onYouTubeIframeAPIReady(videoIds, elements, targetObservers, previewVideoElements, activeClass) {
    for (let i = 0; i < elements.length; i++) {
        const videoObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log("ok");
                        YouTubeIframe(elements, i, videoIds, targetObservers, previewVideoElements, activeClass);
                    }
                });
            },
            { rootMargin: "100px" },
        );
        videoObserver.observe(elements[i]);
    }
}

function YouTubeIframe(elements, index, videoIds, targetObservers, previewVideoElements, activeClass) {
    if (elements[index].tagName.toLowerCase() !== "iframe") {
        target.set(elements[index], targetObservers[index]);
        previewVideo.set(elements[index], previewVideoElements[index]);
        players.set(
            elements[index],
            new YT.Player(elements[index], {
                videoId: videoIds[index],
                playerVars: {
                    controls: 0,
                    rel: 0,
                    fs: 0,
                    enablejsapi: 1,
                    modestbranding: 1,
                },
                events: {
                    onReady: (event) => changePreviewElement(event, activeClass, elements[index]),
                    onStateChange: (event) => onPlayerStateChange(event, index, activeClass, elements[index]),
                },
            }),
        );
    }
}

function onPlayerStateChange(event, index, activeClass, element) {
    turningPreviewElement(event, index, activeClass, element);
    const autoStopVideo = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                event.target.pauseVideo();
                turningPreviewElement(event, index, activeClass, element);
            }
        });
    });
    autoStopVideo.observe(target.get(element));
}

function changePreviewElement(event, activeClass, element) {
    previewVideo.get(element).addEventListener("click", () => {
        previewVideo.get(element).classList.add(activeClass);
        players.get(element).playVideo();
    });
}

function turningPreviewElement(event, index, activeClass, element) {
    if (event.data == YT.PlayerState.PLAYING) {
        players.forEach((player, key) => {
            if (key !== element) {
                player.pauseVideo();
                previewVideo.get(key).classList.remove(activeClass);
            }
        });
    }

    if (event.data == YT.PlayerState.ENDED || event.data == YT.PlayerState.PAUSED) {
        previewVideo.get(element).classList.remove(activeClass);
    }
}
