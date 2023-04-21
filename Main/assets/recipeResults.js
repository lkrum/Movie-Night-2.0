const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3d764b43e2msh71ff099b3ea873dp17d159jsn7f3859064a9a',
    'X-RapidAPI-Host': 'worldwide-recipes1.p.rapidapi.com'
  }
};

var searchResults = localStorage.getItem('search-input');
fetch('https://worldwide-recipes1.p.rapidapi.com/api/search?q=' + searchResults, options)
  .then(response => response.json())
  .then(response => {
    console.log(response);
    // grabbing search result from local storage
    for (var i = 0; i < 10; i++) {
      // creating elements to contain recipes 
      var recipeContentEl = document.querySelector('.recipe-content');
      var recipeTitleEl = document.createElement('h2');

      // looping through each recipe so all of them display on the page
      var feedRes = response.results.feed[i]
      // getting the recipe title
      var recipeTitle = feedRes.display.displayName;
      console.log(feedRes)
      recipeContentEl.appendChild(recipeTitleEl);
      recipeTitleEl.textContent = recipeTitle;

      // getting the recipe URL
      var recipeSourceEl = document.createElement('a');
      recipeContentEl.appendChild(recipeSourceEl);
      var sourceEl = feedRes.display.source.sourceRecipeUrl;
      console.log(sourceEl)
      // recipeSourceEl.textContent = sourceEl;
      // recipeSourceEl.href = sourceEl;
      recipeSourceEl.href = sourceEl;
      recipeSourceEl.appendChild(recipeTitleEl)
      console.log(recipeSourceEl)

      // getting the recipe image
      var recipeImageEl = document.createElement('img');
      recipeContentEl.appendChild(recipeImageEl);
      var recipeImage = feedRes.display.images;
      recipeImageEl.src = recipeImage;
      // base response.results.feed[i])
    }
  })