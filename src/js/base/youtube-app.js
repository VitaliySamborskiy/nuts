export async function useYoutubeApp(videoId, element) {
    return new Promise((resolve) => {
        if (typeof YT === "undefined" || !YT.Player) {
            window.onYouTubeIframeAPIReady = () => {
                resolve(createYoutubeApp(element, videoId));
            };
            loadYoutubeApp();
        } else {
            resolve(createYoutubeApp(element, videoId));
        }
    });
}

function createYoutubeApp(element, videoId, observe) {
    return new YT.Player(element, {
        videoId: videoId,
        playerVars: {
            // color: "white",
            controls: 0,
            rel: 0,
            fs: 0,
            enablejsapi: 0,
            modestbranding: 1,
        },
        events: {
            onStateChange: onPlayerStateChange,
        },
    });
}

function onPlayerStateChange(event) {
    event.target.pauseVideo();
    console.log(event.target.getPlayerState());
}

function loadYoutubeApp() {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(tag, firstScript);
}
