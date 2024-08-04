export function useCounter(number = 0) {
    let counter = number;

    function append() {
        counter++;
    }

    function subtraction() {
        counter--;
    }

    function reset() {
        counter = 0;
    }
}
