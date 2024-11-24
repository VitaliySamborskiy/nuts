import { getElement } from "./get-methods/get-element-dom.js";

export function mapObserver() {
    const observe = new IntersectionObserver(
        (entries) =>
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const script = document.createElement("script");

                    script.src =
                        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBpOYtWVmkdH0QsameLbV__VHDh00qdLi8&callback=console.debug&libraries=maps,marker&v=beta";
                    script.async = true;
                    document.body.appendChild(script);

                    observe.disconnect();
                }
            }),
        {
            rootMargin: "100px",
        },
    );

    observe.observe(getElement(".contact__map-frame"));
}
