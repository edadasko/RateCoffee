function filterCatalog(filterOption, sortOption, catalog) {
  console.log(filterOption);
  console.log(sortOption);

  let catalogArray = [];

  for (let coffeeId in catalog) {
    catalogArray.push({id: coffeeId, value: catalog[coffeeId]});
  }
  catalogArray.reverse();

  if (filterOption == null && sortOption == null) {
    return catalogArray;
  }

  if (filterOption == 'top') {
    catalogArray.sort((a, b) => coffeeStorage.getRating(b.value) - coffeeStorage.getRating(a.value));
    catalogArray = catalogArray.slice(0, 10);
  }

  switch (sortOption) {
    case 'name':
      catalogArray.sort(function(a, b) {
        var nameA = a.value.name.toLowerCase(), nameB = b.value.name.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      break;
    case 'rating':
      catalogArray.sort((a, b) => coffeeStorage.getRating(b.value) - coffeeStorage.getRating(a.value));
    case 'date':
      catalogArray.sort((a, b) => Date.parse(b.value.createDate) - Date.parse(a.value.createDate));
  }

  return catalogArray;
}

function setFilterTitles(filterOption, sortOption) {
  if (filterOption != null) {
    let filterSelect = document.querySelector('.filter-select');
    switch (filterOption.toLowerCase()) {
      case 'all':
      case 'top':
        filterSelect.textContent = filterOption.toUpperCase();
        break;
    }
  }
  if (sortOption != null) {
    let sortSelect = document.querySelector('.sort-select');
    switch (sortOption.toLowerCase()) {
      case 'name':
      case 'rating':
      case 'date':
        sortSelect.textContent = sortOption.toUpperCase();
        break;
    }
  }
}

function changeFilter(filterOption) {
  let url = `/catalog?filter=${filterOption}`;
  let sortOption = getURLParam('sort');
  if (sortOption != null) {
    url += `&sort=${sortOption}`;
  }
  onNavigate(url);
}

function changeSort(sortOption) {
  let url = `/catalog?sort=${sortOption}`;
  let filterOption = getURLParam('filter');
  if (filterOption != null) {
    url += `&filter=${filterOption}`;
  }
  onNavigate(url);
}

async function populateCatalog() {
  let filterOption = getURLParam('filter');
  let sortOption = getURLParam('sort');
  setFilterTitles(filterOption, sortOption);
  let catalog = await coffeeStorage.getCatalog();
  catalog = filterCatalog(filterOption, sortOption, catalog);
  let catalogDiv = document.getElementById('catalog-grid');
  for (let coffee of catalog) {
    let coffeeNode = document.createElement("a");
    coffeeNode.setAttribute('href', '#');
    coffeeNode.setAttribute('onclick', `onNavigate('/coffee-info?id=${coffee.id}'); return false;`);

    let coffeeItemDiv = document.createElement("div");
    coffeeItemDiv.classList.add('catalog-item');

    let coffeeImageDiv = createCoffeeImageDiv(coffee.value);
    coffeeItemDiv.appendChild(coffeeImageDiv);

    let coffeeName = document.createElement("p");
    coffeeName.classList.add('coffee-title');

    coffeeName.textContent = coffee.value.name.toUpperCase();
    coffeeItemDiv.appendChild(coffeeName);

    let ratingDiv = createRatingDiv(coffee.value);
    coffeeItemDiv.appendChild(ratingDiv);
    coffeeNode.appendChild(coffeeItemDiv);
    catalogDiv.append(coffeeNode);
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

populateCatalog();
