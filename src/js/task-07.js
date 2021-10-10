const controllerRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const ranged = () => {
  spanRef.style.fontSize = `${event.currentTarget.value}px`;
};
controllerRef.addEventListener('input', ranged);
