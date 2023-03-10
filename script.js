const increaseButtonEl = document.querySelector(".counter__button--increase");
const counterValueEl = document.querySelector(".counter__value");

increaseButtonEl.addEventListener("click", () => {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  const newValue = currentValueAsNumber + 1;
  counterValueEl.textContent = newValue;
});
