const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const counterScreen = document.getElementById("screen");

function decrease() {
  const value = Number(counterScreen.textContent);
  if (value > 0) {
    counterScreen.textContent = value - 1;
  } else {
    alert("Negative Value not allowed");
  }
}

function increase() {
  const value = Number(counterScreen.textContent);
  counterScreen.textContent = value + 1;
}

function reset() {
  counterScreen.textContent = 0;
}

decrementBtn.addEventListener("click", decrease);
incrementBtn.addEventListener("click", increase);
resetBtn.addEventListener("click", reset);
