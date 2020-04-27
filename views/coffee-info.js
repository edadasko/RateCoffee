let coffeeInfo = `
<link rel="stylesheet" href="styles/coffee-info.css">
<article class="coffee-info">
  <div class="coffee-info-main">
    <div class="coffee-picture-info">
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
      <p>STANDARD VALUE: <span class="coffee-value"></span> ml.</p>
      <ul class="ingredients">
      </ul>
      <div class="bottom-details">
        <p>AVERAGE MARK: <span class="average-mark"></span></p>
        <p>ADDED BY: <span class="coffee-author"></span></p>
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
  </ul>
</section>
`
