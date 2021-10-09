const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsListRef = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  itemRef.classList.add('item');
  return itemRef;
});

ingredientsListRef.append(...items);
