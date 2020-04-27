function getCoffeeFromParams() {
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let coffeeId = urlParams.get('id');
  return coffeeStorage.find(c => c.id == coffeeId);
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
  let commentsList = document.querySelector('.comments-list');

  for (let comment of coffee.comments) {
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
    time.appendChild(document.createTextNode(comment.date));
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

function setInfo() {
  let coffee = getCoffeeFromParams();

  let pictureInfoDiv = document.querySelector('.coffee-picture-info');

  pictureInfoDiv.prepend(createCoffeeTitle(coffee));

  pictureInfoDiv.prepend(createCoffeeImageDiv(coffee));

  let coffeeValue = document.createTextNode(coffee.value);
  document.querySelector('.coffee-value').appendChild(coffeeValue);

  populateIngredients(coffee);

  let averageMark = document.createTextNode(coffee.rating);
  document.querySelector('.average-mark').appendChild(averageMark);

  let addedBy = document.createTextNode(coffee.addedBy);
  document.querySelector('.coffee-author').appendChild(addedBy);

  let description = document.createTextNode(coffee.description);
  document.querySelector('.coffee-description').appendChild(description);

  populateComments(coffee);
}

setInfo();


/*
<div class="coffee-details">
  <p>STANDARD VALUE: <span class="coffee-value"></span> ml.</p>
  <ul class="ingredients">
    <li class="ingredient"> <span class="ingedient-value">1/3</span> <span class="ingedient-name">ESPRESSO</span></li>
    <li class="ingredient"> <span class="ingedient-value">1/3</span> <span class="ingedient-name">MILK</span></li>
    <li class="ingredient"> <span class="ingedient-value">1/3</span> <span class="ingedient-name">MILR FOAM</span></li>
  </ul>
  <div class="bottom-details">
    <p>AVERAGE MARK: <span class="average-mark">4.1</span></p>
    <p>ADDED BY: <span class="coffee-author">ADMIN</span></p>
  </div>
</div>
</div>
<p class="coffee-description">
</p>
</article>
<section class="comments-section">
<form class="comment-form" action="#" method="post">
<textarea name="comment" rows="3" placeholder="LEAVE YOUR COMMENT HERE..."></textarea>
<input type="submit" name="send" value="SEND">
</form>
<ul class="comments-list">
<li class="comment-list-item">
  <div class="comment">
    <div class="comment-info">
      <p class="comment-author">qwerty</p>
      <time datetime="2019-12-12">12.12.2019</time>
    </div>
    <p class="comment-text">Classics are always the best! Love this coffee so much!!!</p>
  </div>
</li>
</ul>
</section>
`

*/
