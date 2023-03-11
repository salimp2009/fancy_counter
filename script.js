const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");

function incrementCounter() {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  const newValue = currentValueAsNumber + 1;
  counterValueEl.textContent = newValue;
}

function decrementCounter() {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  const newValue = currentValueAsNumber - 1;
  counterValueEl.textContent = newValue;
}

increaseButtonEl.addEventListener("click", incrementCounter);

decreaseButtonEl.addEventListener("click", decrementCounter);

resetButtonEl.addEventListener("click", () => {
  counterValueEl.textContent = 0;
});

document.addEventListener("keydown", incrementCounter);
