export function useFormChange(headerTabs, bodyTabs) {
    headerTabs.forEach((item, index) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            for (let bodyTab of bodyTabs) {
                bodyTab.classList.remove("registration__body_active");
            }
            for (let headerTab of headerTabs) {
                headerTab.classList.remove("registration__tab_active");
            }
            item.classList.add("registration__tab_active");
            bodyTabs[index].classList.add("registration__body_active");
        });
    });
}
