var searchBtn = document.querySelector('#searchBtn')
var searchInput = document.querySelector('#input-title');
var recipeSearch;

// users can input search terms for recipes
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e23f87d15fmsh16684e11bab90f4p17d1eejsnca5dd7a7480b',
    'X-RapidAPI-Host': 'worldwide-recipes1.p.rapidapi.com'
  }
};

searchBtn.addEventListener('click', function () {
  recipeSearch = searchInput.value;
  fetch('https://worldwide-recipes1.p.rapidapi.com/api/search?q=' + recipeSearch, options)
    .then(response => response.json())
    .then(response => {
      // event listener function for search button
      console.log(recipeSearch)
      localStorage.setItem('search-input', recipeSearch);
      for (var i = 0; i < 10; i++) {
      console.log(response)
    })
})


