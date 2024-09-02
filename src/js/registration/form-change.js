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

export function useFormChangeRadio(radioInputs, bodyChangesItems) {
    radioInputs.forEach((item, index) => {
        item.addEventListener("change", () => {
            for (let changeItems of bodyChangesItems) {
                changeItems.classList.remove("registration__body_active");
            }

            if (item.value === bodyChangesItems[index].id) {
                bodyChangesItems[index].classList.add("registration__body_active");
            }
        });
    });
}
