function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let quantity;
const boxesRef = document.querySelector('#boxes');
const form = document.querySelector('#controls');
const input = form.firstElementChild;
const createBtn = input.nextElementSibling;
const destroyBtn = createBtn.nextElementSibling;

let arrayOfBoxes = [];
const setOutput = event => {
  quantity = event.currentTarget.value;
};
const onRemove = event => {
  boxesRef.innerHTML = '';
  arrayOfBoxes = [];
};
const onCreate = event => {
  let createdBox;
  for (let i = 1; i <= quantity; i += 1) {
    createdBox = document.createElement('div');
    createdBox.style.width = '30px';
    createdBox.style.height = '30px';
    createdBox.style.backgroundColor = getRandomHexColor();
    arrayOfBoxes.push(createdBox);
    boxesRef.append(...arrayOfBoxes);
  }
};

input.addEventListener('change', setOutput);
createBtn.addEventListener('click', onCreate);
destroyBtn.addEventListener('click', onRemove);
