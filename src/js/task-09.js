const body = document.firstElementChild.firstElementChild.nextElementSibling;
const span = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector('.change-color');
const changeColor = event => {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
};
changeColorBtn.addEventListener('click', changeColor);
