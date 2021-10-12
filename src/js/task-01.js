const categoriesRef = document.querySelector('#categories');
const classesRef = categoriesRef.children;
console.log(`Number of categories: ${classesRef.length}`);

const animalsListRef = document.querySelector('.item');
const productListRef = animalsListRef.nextElementSibling;
const techListRef = productListRef.nextElementSibling;

function logResults(list) {
  console.log(`Category: ${list.firstElementChild.textContent}`);
  console.log(`Elements: ${list.firstElementChild.nextElementSibling.children.length}`);
}
logResults(animalsListRef);
logResults(productListRef);
logResults(techListRef);

// const animalsListRef = document.querySelector('.item');
// console.log(`Category: ${animalsListRef.firstElementChild.textContent}`);
// console.log(`Elements: ${animalsListRef.firstElementChild.nextElementSibling.children.length}`);

// const productListRef = animalsListRef.nextElementSibling;
// console.log(`Category: ${productListRef.firstElementChild.textContent}`);
// console.log(`Elements: ${productListRef.firstElementChild.nextElementSibling.children.length}`);

// const techListRef = productListRef.nextElementSibling;
// console.log(`Category: ${techListRef.firstElementChild.textContent}`);
// console.log(`Elements: ${techListRef.firstElementChild.nextElementSibling.children.length}`);
