var searchBtn = document.querySelector('#searchBtn')
var searchInput = document.querySelector('#input-title');
var recipeSearch;

// users input search terms for recipes and then go to separate results page
searchBtn.addEventListener('click', function () {
  recipeSearch = searchInput.value;
  localStorage.setItem('search-input', recipeSearch);
  return window.location.assign("./recipeResults.html");
})


