function addIngredient() {
  let ingredientListItem =
  `<div class="flex-ingredient-wrap">
     <select class="ingredients-select" name="ingredients-select" onchange="recalculateImage();">
       <option value="espresso">ESPRESSO</option>
       <option value="water">WATER</option>
       <option value="milk">MILK</option>
       <option value="milk-foam">MILK FOAM</option>
       <option value="chocolate">CHOCOLATE</option>
       <option value="honey">HONEY</option>
       <option value="syrup">SYRUP</option>
       <option value="whipped-cream">WHIPPED CREAM</option>
       <option value="liquor">LIQUOR</option>
       <option value="whiskey">WHISKEY</option>
     </select>
     <input class="ingredient-value-input" type="number" name="ingredient-value" value="" placeholder="%" oninput="recalculateImage();" required>
     <button class="remove-ingredient-button" type="button" name="remove-ingredient-button" onclick="removeIngredient();"><i class="fas fa-minus"></i></button>
  </div>
  `

  let items = document.getElementsByClassName('ingredient-select-list-item');

  if (items.length == 4) {
    let addButton = document.getElementById('add-ingredient-button');
    addButton.style.display = 'none';
  }

  if (items.length < 5) {
    let ingredientsList = document.querySelector('.ingredients-select-list');
    let ingredientItem = document.createElement('li');
    ingredientItem.classList.add('ingredient-select-list-item');
    ingredientItem.innerHTML = ingredientListItem;
    ingredientsList.appendChild(ingredientItem);
  }
}

function removeIngredient() {
  let items = document.getElementsByClassName('ingredient-select-list-item');

  if (items.length == 5) {
    let addButton = document.getElementById('add-ingredient-button');
    addButton.style.display = 'block';
  }
  let item = event.srcElement.closest(".ingredient-select-list-item");
  item.parentNode.removeChild(item);
  recalculateImage();
}

function recalculateImage() {
  let ingredientDivs = document.getElementsByClassName('coffee-ingredient');
  while (ingredientDivs.length != 0) {
    ingredientDivs[0].parentNode.removeChild(ingredientDivs[0]);
  }

  let coffeeValue = document.getElementById('coffee-value').value;

  let ingredientsSelects = document.getElementsByClassName('ingredients-select');
  let ingredientsValues = document.getElementsByClassName('ingredient-value-input');

  let ingredientsCount = ingredientsSelects.length;
  let sumOfValues = 0;
  for (let value of ingredientsValues) {
    sumOfValues += +value.value;
  }

  if (sumOfValues > 100) {
    return;
  }

  const regularValue = 350;

  if (coffeeValue = "") {
    coffeeValue = regularValue;
  }

  let reductionFactor = coffeeValue / regularValue;
  if (reductionFactor > 1) {
    reductionFactor = 1;
  }
  if (coffeeValue < regularValue) {
    sumOfValues = (sumOfValues * reductionFactor) | 0;
  }

  if (sumOfValues <= 100 && sumOfValues >= 0) {
    let coffeeImageDiv = document.querySelector('.coffee-image');
    for (let i = ingredientsCount - 1; i >= 0; i--) {
      let value = ingredientsValues[i].value;
      if (value != "") {
        let ingredientDiv = document.createElement("div");
        ingredientDiv.classList.add('coffee-ingredient');
        ingredientDiv.classList.add(ingredientsSelects[i].options[ingredientsSelects[i].selectedIndex].value);
        ingredientDiv.setAttribute('style', getIngredientStyleString(100 - sumOfValues | 0));
        sumOfValues -= value * reductionFactor;
        coffeeImageDiv.appendChild(ingredientDiv);
      }
    }
  }
}

function submitForm() {
  let name = document.getElementById('coffee-name').value;
  let value = document.getElementById('coffee-value').value;
  let description = document.getElementById('description-textarea').value;
  let user = authService.user.email;

  if (name == "" || value == "" || description == "") {
    return;
  }

  let ingredientsList = [];
  let ingredientsSelects = document.getElementsByClassName('ingredients-select');
  let ingredientsValues = document.getElementsByClassName('ingredient-value-input');

  let sumOfValues = 0;
  for (let value of ingredientsValues) {
    sumOfValues += +value.value;
  }

  if (sumOfValues < 95 || sumOfValues > 100) {
    alert('Sum of ingredients should be сlose to 100');
    return;
  }

  for (let i = ingredientsSelects.length - 1; i >= 0; i--) {
    let name = ingredientsSelects[i].options[ingredientsSelects[i].selectedIndex].value;
    let value = +ingredientsValues[i].value;
    ingredientsList.push(new Ingredient(name, value));
  }


  let coffee = new Coffee(name, user, value, description, ingredientsList);
  coffeeStorage.addCoffee(coffee);
  onNavigate('/');
}
