let catalog = `
<link rel="stylesheet" href="styles/catalog.css">
<div class="sort-section">
  <div class="filter">
    <a class="filter-select" href="#">FILTER</a>
    <ul class="filter-list hidden">
      <li><a href="#" onclick="changeFilter('top'); return false;">TOP</a></li>
      <li><a href="#" onclick="changeFilter('all'); return false;">ALL</a></li>
    </ul>
  </div>
  <div class="sort">
    <a class="sort-select" href="#">SORT</a>
    <ul class="sort-list hidden">
      <li><a href="#" onclick="changeSort('name'); return false;">NAME</a></li>
      <li><a href="#" onclick="changeSort('rating'); return false;">RATING</a></li>
      <li><a href="#" onclick="changeSort('date'); return false;">DATE</a></li>
    </ul>
  </div>
</div>
<section class="catalog-grid" id="catalog-grid">
</section>
`
