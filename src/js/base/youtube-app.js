export function onYouTubeIframeAPIReady(videoId, element, targetObserver) {
    let target = targetObserver;
    for (let i = 0; i < element.length; i++) {
        new YT.Player(element[i], {
            videoId: videoId[i],
            playerVars: {
                // color: "white",
                controls: 0,
                rel: 0,
                fs: 0,
                enablejsapi: 1,
                modestbranding: 1,
            },
            events: {
                onStateChange: function onPlayerStateChange(event) {
                    const autoStopVideo = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                            if (!entry.isIntersecting) {
                                event.target.pauseVideo();
                            }
                        });
                    });

                    autoStopVideo.observe(target);
                },
            },
        });
    }
}
