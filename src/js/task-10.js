function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesRef = document.querySelector('#boxes');
const createBoxes = amount => {
  for (let i = 1; i <= amount; i += 1) {
    console.log(document.createElement('div'));
  }
};
createBoxes(5);
