export function useInputClear(inputs) {
    for (let input of inputs) {
        input.value = "";
    }
}
