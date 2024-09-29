let target = new Map();
let previewVideo = new Map();
let players = new Map();

export function onYouTubeIframeAPIReady(videoIds, elements, targetObservers, previewVideoElements, activeClass) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].tagName.toLowerCase() !== "iframe") {
            target.set(elements[i], targetObservers[i]);
            previewVideo.set(elements[i], previewVideoElements[i]);
            players.set(
                elements[i],
                new YT.Player(elements[i], {
                    videoId: videoIds[i],
                    playerVars: {
                        controls: 0,
                        rel: 0,
                        fs: 0,
                        enablejsapi: 1,
                        modestbranding: 1,
                    },
                    events: {
                        onReady: (event) => changePreviewElement(event, activeClass, elements[i]),
                        onStateChange: (event) => onPlayerStateChange(event, i, activeClass, elements[i]),
                    },
                }),
            );
        }
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
