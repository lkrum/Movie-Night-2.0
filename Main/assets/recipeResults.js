const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'df396a02a4mshd490c0b96542404p1c76a0jsn5ac1a117da04',
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
      var recipeTimeContainerEl = document.getElementById("recipe-time-" + i);
      var recipeContainerEl = document.getElementById("recipe-title-" + i)

      // looping through each recipe so all of them display on the page
      var feedRes = response.results.feed[i]
      
      // getting the recipe title
      var recipeTitle = feedRes.display.displayName;
      console.log(feedRes);
      var recipeTitleEl = document.createElement('h3');
      recipeContainerEl.appendChild(recipeTitleEl);
      recipeTitleEl.textContent = recipeTitle;

      // getting the recipe time
      var recipeTime = feedRes.content.details.totalTime;
      console.log(feedRes);
      var recipeTimeEl = document.createElement('li');
      recipeTimeContainerEl.appendChild(recipeTimeEl);
      recipeTimeEl.textContent = "Time: " + recipeTime;

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