function getCoffeeIdFromParams() {
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let coffeeId = urlParams.get('id');
  return coffeeId;
}

function createCoffeeTitle(coffee) {
  let coffeeName = document.createElement("p");
  coffeeName.classList.add('coffee-title');
  coffeeName.textContent = coffee.name.toUpperCase();
  return coffeeName;
}

function populateIngredients(coffee) {
  let ingredientsList = document.querySelector('.ingredients');
  for (let ingredient of coffee.ingredients) {
    let ingredientItem = document.createElement("li");
    ingredientItem.classList.add('ingredient');

    let ingredientValue = document.createElement("span");
    ingredientValue.classList.add('ingedient-value');
    ingredientValue.textContent = `${ingredient.value}% `;

    let ingredientName = document.createElement("span");
    ingredientName.classList.add('ingedient-name');
    ingredientName.textContent = ingredient.name.toUpperCase();

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
      commentAuthor.textContent = comment.author;
      commentInfoDiv.appendChild(commentAuthor);

      let time = document.createElement("time");
      time.setAttribute('datetime', comment.date);
      time.textContent = (new Date(comment.date)).toISOString().slice(0, 10);
      commentInfoDiv.appendChild(time);

      let commentText = document.createElement("p");
      commentText.classList.add('comment-text');
      commentText.textContent = comment.text;

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

  populateIngredients(coffee);

  document.querySelector('.coffee-value').textContent = coffee.value;
  document.querySelector('.average-mark').textContent = coffeeStorage.getRating(coffee).toFixed(2);
  document.querySelector('.coffee-author').textContent = coffee.addedBy;
  document.querySelector('.coffee-description').textContent = coffee.description;

  populateComments(coffee);
}

async function startSettingInfo() {
  let coffeeId = getCoffeeIdFromParams();
  console.log(coffeeId);
  coffeeStorage.withCoffee(coffeeId, setInfo);
  if (await authService.isAuthenticated()) {
    checkMark(authService.user, getCoffeeIdFromParams());
  }
}

function checkMark(user, coffeeId) {
  coffeeStorage.withCoffee(coffeeId, function(coffee) {
    if ('marks' in coffee) {
      let marks = coffee.marks;
      if (user.uid in marks) {
        let input = document.getElementsByClassName('star-rating-input');
        input[5 - marks[user.uid]].checked = true;
      }
    }
  });
}

function setMark(button) {
  let user = firebase.auth().currentUser;
  if (user == null) {
    alert('Log in for rate coffee.');
    return;
  }
  let id = user.uid;
  let mark = button.value;
  let coffeeId = getCoffeeIdFromParams();
  coffeeStorage.addMark(coffeeId, id, mark);
  coffeeStorage.withCoffee(coffeeId, function(coffee) {
    document.querySelector('.average-mark').textContent = coffeeStorage.getRating(coffee).toFixed(2);
  })
}
startSettingInfo();
