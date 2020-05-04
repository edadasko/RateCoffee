async function startSettingInfo() {
  let coffeeId = getURLParam('id');
  let coffee = await coffeeStorage.getCoffee(coffeeId);
  if (coffee == null) {
    onNavigate('/404');
    return;
  }
  setInfo(coffee);
  if (await authService.isAuthenticated()) {
    checkMark(authService.user, getURLParam('id'));
  }
}

function setInfo(coffee) {
  let pictureInfoDiv = document.querySelector('.coffee-picture-info');

  pictureInfoDiv.prepend(createCoffeeTitle(coffee));
  pictureInfoDiv.prepend(createCoffeeImageDiv(coffee));

  populateIngredients(coffee);

  document.querySelector('.coffee-value').textContent = coffee.value;
  document.querySelector('.average-mark').textContent = getCoffeeRating(coffee).toFixed(2);
  document.querySelector('.coffee-author').textContent = coffee.addedBy;
  document.querySelector('.coffee-description').textContent = coffee.description;

  populateComments(coffee);
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
    commentsList.innerHTML = "";
    for (let comment of Object.values(coffee.comments)) {
      let commentItem = document.createElement("li");
      commentItem.classList.add('comment-list-item');

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
      time.textContent = comment.date;
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

function createCoffeeTitle(coffee) {
  let coffeeName = document.createElement("p");
  coffeeName.classList.add('coffee-title');
  coffeeName.textContent = coffee.name.toUpperCase();
  return coffeeName;
}

async function checkMark(user, coffeeId) {
  let coffee = await coffeeStorage.getCoffee(coffeeId);
  if ('marks' in coffee) {
    let marks = coffee.marks;
    if (user.uid in marks) {
      let input = document.getElementsByClassName('star-rating-input');
      input[5 - marks[user.uid]].checked = true;
    }
  }
}

async function setMark(button) {
  let isAuth = await authService.isAuthenticated();
  if (!isAuth) {
    alert('Log in for rate coffee.');
    return;
  }
  let user = authService.user;

  let id = user.uid;
  let mark = button.value;
  let coffeeId = getURLParam('id');
  coffeeStorage.addMark(coffeeId, id, mark);
  let coffee = await coffeeStorage.getCoffee(coffeeId);
  document.querySelector('.average-mark').textContent = getCoffeeRating(coffee).toFixed(2);
}

async function leaveComment() {
  let isAuth = await authService.isAuthenticated();
  if (!isAuth) {
    alert('Log in for leave comments.');
    return;
  }
  let user = authService.user;
  let input = document.getElementById('comment-input');
  let text = input.value;

  if (text.trim() == "") {
    return;
  }
  input.value = "";
  let comment = new Comment(user.email, text);
  let coffeeId = getURLParam('id');
  coffeeStorage.addComment(coffeeId, comment);
  let coffee = await coffeeStorage.getCoffee(coffeeId);
  populateComments(coffee);
}

startSettingInfo();
