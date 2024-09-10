let target = null;
let previewVideo = null;
let players = [];

export function onYouTubeIframeAPIReady(videoId, element, targetObserver, previewVideoElement) {
    target = targetObserver;
    previewVideo = previewVideoElement;
    for (let i = 0; i < element.length; i++) {
        players[i] = new YT.Player(element[i], {
            videoId: videoId[i],
            playerVars: {
                controls: 0,
                rel: 0,
                fs: 0,
                enablejsapi: 1,
                modestbranding: 1,
            },
            events: {
                onReady: (event) => changePreviewElement(event, i),
                onStateChange: (event) => onPlayerStateChange(event, i),
            },
        });
    }
}

function onPlayerStateChange(event, index) {
    turningPreviewElement(event, index);
    const autoStopVideo = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                event.target.pauseVideo();
                turningPreviewElement(event, index);
            }
        });
    });
    autoStopVideo.observe(target);
}

function changePreviewElement(event, index) {
    previewVideo[index].addEventListener("click", () => {
        previewVideo[index].classList.add("manufacturing__preview-img-block_active");
        event.target.playVideo();
    });
}

function turningPreviewElement(event, index) {
    if (event.data == YT.PlayerState.ENDED || event.data == YT.PlayerState.PAUSED) {
        previewVideo[index].classList.remove("manufacturing__preview-img-block_active");
    }
}
