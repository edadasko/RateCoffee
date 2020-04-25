let coffeeInfo = `
<link rel="stylesheet" href="styles/coffee-info.css">
<article class="coffee-info">
  <div class="coffee-info-main">
    <div class="coffee-picture-info">
      <div class="coffee-image">
        <img src="images/empty-cup.png" alt="empty-cup">
        <div class="coffee-ingredient coffee-ingredient1 milk-foam"></div>
        <div class="coffee-ingredient coffee-ingredient2 milk"></div>
        <div class="coffee-ingredient coffee-ingredient3 espresso"></div>
      </div>
      <p class="coffee-title">CAPPUCCINO</p>
      <div class="star-rating">
        <input class="star-rating-input" id="star-rating-5" type="radio" name="rating" value="5">
        <label class="star-rating-icon fa fa-star" for="star-rating-5"></label>
        <input class="star-rating-input" id="star-rating-4" type="radio" name="rating" value="4">
        <label class="star-rating-icon fa fa-star" for="star-rating-4"></label>
        <input class="star-rating-input" id="star-rating-3" type="radio" name="rating" value="3">
        <label class="star-rating-icon fa fa-star" for="star-rating-3"></label>
        <input class="star-rating-input" id="star-rating-2" type="radio" name="rating" value="2">
        <label class="star-rating-icon fa fa-star" for="star-rating-2"></label>
        <input class="star-rating-input" id="star-rating-1" type="radio" name="rating" value="1">
        <label class="star-rating-icon fa fa-star" for="star-rating-1"></label>
      </div>
    </div>
    <div class="coffee-details">
      <p>STANDARD VALUE: <span class="coffee-value">180</span> ml.</p>
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
    An espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam.
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
    <li class="comment-list-item">
      <div class="comment">
        <div class="comment-info">
          <p class="comment-author">qwerty</p>
          <time datetime="2019-12-12">12.12.2019</time>
        </div>
        <p class="comment-text">Classics are always the best! Love this coffee so much!!!</p>
      </div>
    </li>
    <li class="comment-list-item">
      <div class="comment">
        <div class="comment-info">
          <p class="comment-author">qwerty</p>
          <time datetime="2019-12-12">12.12.2019</time>
        </div>
        <p class="comment-text">Classics are always the best! Love this coffee so much!!!</p>
      </div>
    </li>
    <li class="comment-list-item">
      <div class="comment">
        <div class="comment-info">
          <p class="comment-author">qwerty</p>
          <time datetime="2019-12-12">12.12.2019</time>
        </div>
        <p class="comment-text">Classics are always the best! Love this coffee so much!!!</p>
      </div>
    </li>
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
