let ingredientListItem =
`<div class="flex-ingredient-wrap">
   <select class="ingredients-select" name="ingredients-select">
     <option value="espresso">ESPRESSO</option>
     <option value="water">WATER</option>
     <option value="milk">MILK</option>
     <option value="milk-foam">MILK FOAM</option>
     <option value="milk-foam">MILK FOAM</option>
     <option value="chocolate">CHOCOLATE</option>
     <option value="honey">HONEY</option>
     <option value="syrup">SYRUP</option>
     <option value="whipped-cream">WHIPPED CREAM</option>
     <option value="liquor">LIQUOR</option>
     <option value="whiskey">WHISKEY</option>
   </select>
   <input class="ingredient-value-input" type="number" name="ingredient-value" value="" placeholder="VALUE" required>
   <button class="remove-ingredient-button" type="button" name="remove-ingredient-button" onclick="removeIngredient();"><i class="fas fa-minus"></i></button>
</div>
`

function addIngredient() {
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
  console.log("!!!");
  let items = document.getElementsByClassName('ingredient-select-list-item');

  if (items.length == 5) {
    let addButton = document.getElementById('add-ingredient-button');
    addButton.style.display = 'block';
  }
  let item = event.srcElement.closest(".ingredient-select-list-item");
  item.parentNode.removeChild(item);
}
