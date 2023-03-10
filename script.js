const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");

increaseButtonEl.addEventListener("click", () => {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  const newValue = currentValueAsNumber + 1;
  counterValueEl.textContent = newValue;
});

decreaseButtonEl.addEventListener("click", () => {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  const newValue = currentValueAsNumber - 1;
  counterValueEl.textContent = newValue;
});

resetButtonEl.addEventListener("click", () => {
  counterValueEl.textContent = 0;
});
