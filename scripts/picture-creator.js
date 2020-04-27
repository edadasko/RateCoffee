function getIngredientStyleString(value) {
  return `clip-path: polygon(0 ${value}%, 100% ${value}%, 100% 100%, 0% 100%);
  -webkit-clip-path: polygon(0 ${value}%, 100% ${value}%, 100% 100%, 0% 100%);`;
}

function createCoffeeImageDiv(coffee) {
  let coffeeImageDiv = document.createElement("div");
  coffeeImageDiv.classList.add('coffee-image');

  let coffeeImage = document.createElement("img");
  coffeeImage.setAttribute('src', "images/empty-cup.png");
  coffeeImage.setAttribute('alt', "empty-cup");
  coffeeImageDiv.appendChild(coffeeImage);
  let sumOfValues = 0;
  for (let ingredient of coffee.ingredients) {
    sumOfValues += ingredient.value;
  }

  const regularValue = 350;
  let reductionFactor = coffee.value / regularValue;
  if (coffee.value < regularValue) {
    sumOfValues -= 100 - (reductionFactor * 100) | 0;
  }

  for (let ingredient of coffee.ingredients) {
    let ingredientDiv = document.createElement("div");
    ingredientDiv.classList.add('coffee-ingredient');
    ingredientDiv.classList.add(ingredient.name);
    ingredientDiv.setAttribute('style', getIngredientStyleString(100 - sumOfValues | 0));
    sumOfValues -= ingredient.value * reductionFactor;
    coffeeImageDiv.appendChild(ingredientDiv);
  }

  return coffeeImageDiv;
}
