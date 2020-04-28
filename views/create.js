let create = `
<link rel="stylesheet" href="styles/create-coffee.css">
<form class="create-coffee-form" onsubmit="submitForm();">
  <div class="coffee-form-block">
    <div class="coffee-form-left">
      <div class="coffee-image">
        <img src="images/empty-cup.png" alt="empty-cup">
      </div>
      <input type="text" id="coffee-name" name="coffee-name" value="" placeholder="ENTER A NAME HERE..." required>
      <label for="coffee-value">STANDARD VALUE:</label>
      <input type="number" id="coffee-value" name="coffee-value" value="" placeholder="ml" oninput="recalculateImage();" required>
    </div>
    <div class="coffee-form-right">
      <div class="add-ingredients-section">
        <ul class="ingredients-select-list">
          <li class="ingredient-select-list-item">
            <div class="flex-ingredient-wrap">
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
            </div>
          </li>
        </ul>
        <button id="add-ingredient-button" type="button" name="add-ingredient-button" onclick="addIngredient();"><i class="fas fa-plus"></i></button>
      </div>
      <textarea id="description-textarea" name="name" rows="3" placeholder="DESCRIPTION" required></textarea>
      <button id="create-button" name="create-button" onclick="submitForm();">CREATE</button>
    </div>
  </div>
</form>
`
