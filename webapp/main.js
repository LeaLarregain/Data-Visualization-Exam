const decrement = document.getElementById('decrement');
const increment = document.getElementById('increment');
const reset = document.getElementById('reset');
const countDisplay = document.getElementById('countDisplay');

let count = 0;

function updateCountDisplay() {
    countDisplay.textContent = count;
}

function increment() {
    count++;
    updateCountDisplay();
}

function decrement() {
    if (count > 0) {
        count--;
        updateCountDisplay();
    }
}

function reset() {
    count = 0;
    updateCountDisplay();
}

increment.addEventListener('click', increment);
decrement.addEventListener('click', decrement);
reset.addEventListener('click', reset);


