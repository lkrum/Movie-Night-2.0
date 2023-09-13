const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cee5de46b0msh2b762e13632954cp127afajsnca4144967f8a',
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
      // // creating elements to contain recipes 
      // var recipeContainerEl = document.querySelector('.recipe-container-' + i);
      var foodimgcontainer = document.querySelector('#food-img-' + i)
      var cardBody = document.getElementById("card-body-" + i);
      var recipeContainerEl = document.getElementById("recipe-title-" + i)


      // looping through each recipe so all of them display on the page
      var feedRes = response.results.feed[i]
      // getting the recipe title
      var recipeTitle = feedRes.display.displayName;
      console.log(feedRes);
      var recipeTitleEl = document.createElement('h1');
      recipeContainerEl.appendChild(recipeTitleEl);
      recipeTitleEl.textContent = recipeTitle;

      // getting the recipe URL
      var recipeSourceEl = document.createElement('a');
      recipeContainerEl.appendChild(recipeSourceEl);
      var sourceEl = feedRes.display.source.sourceRecipeUrl;
      recipeSourceEl.href = sourceEl;
      recipeSourceEl.appendChild(recipeTitleEl)

      // getting the recipe image
      var recipeImageEl = document.createElement('img');
      var recipeImage = feedRes.display.images;
      recipeImageEl.src = recipeImage;
      recipeImageEl.style.maxWidth = '18rem'
      foodimgcontainer.appendChild(recipeImageEl);

    }
  })