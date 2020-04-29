function getCoffeeIdFromParams() {
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let coffeeId = urlParams.get('id');
  return coffeeId;
}

function createCoffeeTitle(coffee) {
  let coffeeName = document.createElement("p");
  coffeeName.classList.add('coffee-title');
  let nameText = document.createTextNode(coffee.name.toUpperCase());
  coffeeName.appendChild(nameText);
  return coffeeName;
}

function populateIngredients(coffee) {
  let ingredientsList = document.querySelector('.ingredients');
  for (let ingredient of coffee.ingredients) {
    let ingredientItem = document.createElement("li");
    ingredientItem.classList.add('ingredient');

    let ingredientValue = document.createElement("span");
    ingredientValue.classList.add('ingedient-value');
    let ingredientValueText = document.createTextNode(`${ingredient.value}% `);
    ingredientValue.appendChild(ingredientValueText);

    let ingredientName = document.createElement("span");
    ingredientName.classList.add('ingedient-name');
    let ingredientNameText = document.createTextNode(ingredient.name.toUpperCase());
    ingredientName.appendChild(ingredientNameText);

    ingredientItem.appendChild(ingredientValue);
    ingredientItem.appendChild(ingredientName);
    ingredientsList.prepend(ingredientItem);
  }
}

function populateComments(coffee) {
  if (coffee.hasOwnProperty('comments')) {
    let commentsList = document.querySelector('.comments-list');
    for (let comment of Object.values(coffee.comments)) {
      let commentItem = document.createElement("li");
      commentItem.classList.add('ingredientItem');

      let commentDiv = document.createElement("div");
      commentDiv.classList.add('comment');

      let commentInfoDiv = document.createElement("div");
      commentInfoDiv.classList.add('comment-info');

      let commentAuthor = document.createElement("p");
      commentAuthor.classList.add('comment-author');
      commentAuthor.appendChild(document.createTextNode(comment.author));
      commentInfoDiv.appendChild(commentAuthor);

      let time = document.createElement("time");
      time.setAttribute('datetime', comment.date);
      time.appendChild(document.createTextNode((new Date(comment.date).toISOString().slice(0, 10))));
      commentInfoDiv.appendChild(time);

      let commentText = document.createElement("p");
      commentText.classList.add('comment-text');
      commentText.appendChild(document.createTextNode(comment.text));

      commentDiv.appendChild(commentInfoDiv);
      commentDiv.appendChild(commentText);

      commentItem.appendChild(commentDiv);
      commentsList.prepend(commentItem);
    }
  }
}

function setInfo(coffee) {
  let pictureInfoDiv = document.querySelector('.coffee-picture-info');

  pictureInfoDiv.prepend(createCoffeeTitle(coffee));

  pictureInfoDiv.prepend(createCoffeeImageDiv(coffee));

  let coffeeValue = document.createTextNode(coffee.value);
  document.querySelector('.coffee-value').appendChild(coffeeValue);

  populateIngredients(coffee);

  let averageMark = document.createTextNode(coffeeStorage.getRating(coffee));
  document.querySelector('.average-mark').appendChild(averageMark);

  let addedBy = document.createTextNode(coffee.addedBy);
  document.querySelector('.coffee-author').appendChild(addedBy);

  let description = document.createTextNode(coffee.description);
  document.querySelector('.coffee-description').appendChild(description);

  populateComments(coffee);
}

function startSettingInfo() {
  let coffeeId = getCoffeeIdFromParams();
  coffeeStorage.withCoffee(coffeeId, setInfo);
}

startSettingInfo();
