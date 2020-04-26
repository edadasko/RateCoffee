function getIngredientStyleString(value) {
  return "clip-path: polygon(0 " + value + "%, 100% " + value +
  "%, 100% 100%, 0% 100%); " +
  "-webkit-clip-path: polygon(0 "+ value + "%, 100% " + value +
  "%, 100% 100%, 0% 100%);";
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

function createRatingDiv(coffee) {
  let ratingDiv = document.createElement("div");
  ratingDiv.classList.add('grid-item-rating');
  for (let i = 0; i < 5; i++) {
    let starSpan = document.createElement("span");
    starSpan.classList.add("fa");
    starSpan.classList.add("fa-star");
    if (coffee.rating > i + 1) {
      starSpan.classList.add("checked");
    }
    ratingDiv.appendChild(starSpan);
  }
  return ratingDiv;
}

function populateCatalog() {
  let catalogDiv = document.getElementById('catalog-grid');

  for (let coffee of coffeeStorage) {
    let coffeeNode = document.createElement("a");
    coffeeNode.setAttribute('href', '#');
    coffeeNode.setAttribute('onclick', "onNavigate('/coffee-info'); return false;");

    let coffeeItemDiv = document.createElement("div");
    coffeeItemDiv.classList.add('catalog-item');

    let coffeeImageDiv = createCoffeeImageDiv(coffee);
    coffeeItemDiv.appendChild(coffeeImageDiv);

    let coffeeName = document.createElement("p");
    coffeeName.classList.add('coffee-title');

    let nameText = document.createTextNode(coffee.name.toUpperCase());
    coffeeName.appendChild(nameText);
    coffeeItemDiv.appendChild(coffeeName);

    let ratingDiv = createRatingDiv(coffee);
    coffeeItemDiv.appendChild(ratingDiv);
    coffeeNode.appendChild(coffeeItemDiv);
    catalogDiv.appendChild(coffeeNode);
  }
}

populateCatalog();
