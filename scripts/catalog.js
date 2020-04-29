function populateCatalog(catalog) {
  let catalogDiv = document.getElementById('catalog-grid');
  for (let coffeeId in catalog) {
    let coffeeNode = document.createElement("a");
    coffeeNode.setAttribute('href', '#');
    coffeeNode.setAttribute('onclick', `onNavigate('/coffee-info?id=${coffeeId}'); return false;`);

    let coffeeItemDiv = document.createElement("div");
    coffeeItemDiv.classList.add('catalog-item');

    let coffeeImageDiv = createCoffeeImageDiv(catalog[coffeeId]);
    coffeeItemDiv.appendChild(coffeeImageDiv);

    let coffeeName = document.createElement("p");
    coffeeName.classList.add('coffee-title');

    let nameText = document.createTextNode(catalog[coffeeId].name.toUpperCase());
    coffeeName.appendChild(nameText);
    coffeeItemDiv.appendChild(coffeeName);

    let ratingDiv = createRatingDiv(catalog[coffeeId]);
    coffeeItemDiv.appendChild(ratingDiv);
    coffeeNode.appendChild(coffeeItemDiv);
    catalogDiv.appendChild(coffeeNode);
  }
}

function createRatingDiv(coffee) {
  let ratingDiv = document.createElement("div");
  ratingDiv.classList.add('grid-item-rating');
  for (let i = 0; i < 5; i++) {
    let starSpan = document.createElement("span");
    starSpan.classList.add("fa");
    starSpan.classList.add("fa-star");
    if (coffeeStorage.getRating(coffee) >= i + 0.5) {
      starSpan.classList.add("checked");
    }
    ratingDiv.appendChild(starSpan);
  }
  return ratingDiv;
}

coffeeStorage.withCatalog(populateCatalog);
