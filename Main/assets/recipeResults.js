const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0611b75592mshd46c95543061f57p1334b9jsnac720c0d64b4',
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
      var recipeContainerEl = document.querySelector('.recipe-container');
      var recipeTitleEl = document.createElement('h2');

      // looping through each recipe so all of them display on the page
      var feedRes = response.results.feed[i]
      // getting the recipe title
      var recipeTitle = feedRes.display.displayName;
      console.log(feedRes)
      recipeTitleEl.textContent = recipeTitle;
      recipeContainerEl.appendChild(recipeTitleEl);

      // getting the recipe URL
      var recipeSourceEl = document.createElement('a');
      recipeContainerEl.appendChild(recipeSourceEl);
      var sourceEl = feedRes.display.source.sourceRecipeUrl;
      console.log(sourceEl)
      // referenced GeeksforGeeks article for the .href method
      recipeSourceEl.href = sourceEl;
      recipeSourceEl.appendChild(recipeTitleEl)
      console.log(recipeSourceEl)

      // getting the recipe image
      var recipeImageEl = document.createElement('img');
      recipeContainerEl.appendChild(recipeImageEl);
      var recipeImage = feedRes.display.images;
      recipeImageEl.src = recipeImage;
      recipeImageEl.style.maxWidth = '20vw'
    }
  })