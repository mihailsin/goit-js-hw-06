const counterValueRef = document.querySelector('#value');
let counterValue = 0;

const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');

const incrementValue = () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
};

const decrementValue = () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
};

incrementBtnRef.addEventListener('click', incrementValue);
decrementBtnRef.addEventListener('click', decrementValue);
