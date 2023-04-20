var searchRecipeBtn = document.querySelector('#searchRecipeBtn')
var searchInput = document.querySelector('#input-recipe');
var recipeSearch;

// users input search terms for recipes and then go to separate results page
searchRecipeBtn.addEventListener('click', function () {
  recipeSearch = searchInput.value;
  localStorage.setItem('search-input', recipeSearch);
  return window.location.assign("./recipeResults.html");
})


