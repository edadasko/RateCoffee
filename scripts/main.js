function getURLParam(param) {
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let value = urlParams.get(param);
  return value;
}

async function searchCoffee() {
  let input = document.getElementById("search-input");
  let text = input.value.trim().toLowerCase();
  input.value = "";
  if (text.trim() == "") {
    return;
  }

  if (text.length < 3) {
    alert('Use a longer string for search.');
    return;
  }

  let catalog = await coffeeStorage.getCatalog();

  for (let id in catalog) {
    let coffeeName = catalog[id].name.toLowerCase();
    if (coffeeName.includes(text) || text.includes(coffeeName)) {
      onNavigate('/coffee-info?id=' + id);
      return;
    }
  }
  alert("Sorry, we don't have such coffee yet.");
}
