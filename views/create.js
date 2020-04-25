let create = `
<link rel="stylesheet" href="styles/create-coffee.css">
<form class="create-coffee-form">
  <div class="coffee-form-block">
    <div class="coffee-form-left">
      <div class="coffee-image">
        <img src="images/empty-cup.png" alt="empty-cup">
      </div>
      <input type="text" id="coffee-name" name="coffee-name" value="" placeholder="ENTER A NAME HERE..." required>
      <label for="coffee-value">STANDARD VALUE:</label>
      <input type="number" id="coffee-value" name="coffee-value" value="" placeholder="ml" required>
    </div>
    <div class="coffee-form-right">
      <div class="add-ingredients-section">
        <ul class="ingredients-select-list">
          <li class="ingredient-select-list-item">
            <div class="flex-ingredient-wrap">
              <select class="ingredients-select" name="ingredients-select">
                <option value="espresso">ESPRESSO</option>
                <option value="water">WATER</option>
              </select>
              <input class="ingredient-value-input" type="number" name="ingredient-value" value="" placeholder="VALUE" required>
              <button class="remove-ingredient-button" type="button" name="remove-ingredient-button"><i class="fas fa-minus"></i></button>
            </div>
          </li>
          <li class="ingredient-select-list-item">
            <div class="flex-ingredient-wrap">
              <select class="ingredients-select" name="ingredients-select">
                <option value="espresso">ESPRESSO</option>
                <option value="water" selected>WATER</option>
              </select>
              <input class="ingredient-value-input" type="number" name="ingredient-value" value="" placeholder="VALUE" required>
              <button class="remove-ingredient-button" type="button" name="remove-ingredient-button"><i class="fas fa-minus"></i></button>
            </div>
          </li>
        </ul>
        <button id="add-ingredient-button" type="button" name="add-ingredient-button"><i class="fas fa-plus"></i></button>
      </div>
      <textarea id="description-textarea" name="name" rows="3" placeholder="DESCRIPTION"></textarea>
      <button id="create-button" type="submit" name="create-button">CREATE</button>
    </div>
  </div>
</form>
`
