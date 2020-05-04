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


function getCoffeeRating(coffee) {
  if (!('marks' in coffee)) {
    return 0;
  }

  let marks = Object.values(coffee.marks);
  if (marks.length == 0) {
    return 0;
  }
  return marks.reduce((a, b) => (a + b)) / marks.length;
}

function setEventListeners() {
  const catalogLink = document.querySelector('#catalog-link a');
  const createLink = document.querySelector('#create-link a');
  const signupLink = document.querySelector('#signup-link a');
  const loginLink = document.querySelector('#login-link a');
  const logoutLink = document.querySelector('#logout-link a');
  const imageLink = document.querySelector('#image-link');

  createLink.addEventListener("click", function(e) {
      onNavigate('/create');
      e.preventDefault();
  }, true);

  signupLink.addEventListener("click", function(e) {
      onNavigate('/register');
      e.preventDefault();
  }, true);

  loginLink.addEventListener("click", function(e) {
      onNavigate('/login');
      e.preventDefault();
  }, true);

  logoutLink.addEventListener("click", function(e) {
      authService.logOut();
      e.preventDefault();
  }, true);

  for (link of [imageLink, catalogLink]) {
    link.addEventListener("click", function(e) {
        onNavigate('/');
        e.preventDefault();
    }, true);
  }
}

setEventListeners();
