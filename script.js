const counterEl = document.querySelector(".counter");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const counterTitleEl = document.querySelector(".counter__title");

function incrementCounter() {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber + 1;
  if (newValue > 5) {
    newValue = 5;
    // no dot required below to identify class since it is classList
    counterEl.classList.add("counter--limit");
    counterTitleEl.innerHTML = "Limited! Buy <b>Pro</b> for >5!";
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }
  counterValueEl.textContent = newValue;
  increaseButtonEl.blur();
}

function decrementCounter() {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber - 1;

  if (newValue < 0) {
    newValue = 0;
  }
  counterValueEl.textContent = newValue;
  decreaseButtonEl.blur();
}

increaseButtonEl.addEventListener("click", incrementCounter);

decreaseButtonEl.addEventListener("click", decrementCounter);

resetButtonEl.addEventListener("click", () => {
  counterValueEl.textContent = 0;
  counterEl.classList.remove("counter--limit");
  counterTitleEl.textContent = "Fancy Counter";
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
  // to prevent space button press event twice due to focus
  resetButtonEl.blur();
});

document.addEventListener("keydown", incrementCounter);
