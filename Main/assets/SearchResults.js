var genreChoice = localStorage.getItem('Genre (send value to API)');
var actualKeyword = localStorage.getItem('Movie Title (send value to API)')

if (actualKeyword) {
  titleGrab()
}
else {
  genreGrab()
}

var searchBtn = document.querySelector('#searchBtn')
var searchInput = document.querySelector('#input-title');


// gets search input from local storage
// var length = response.result.length;
// var randInt = Math.floor(Math.random * length); 
// links api information and grabs
function titleGrab() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c460babefcmshc0d3062ab7fe4fcp161d67jsnd2ae94069a50',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
  fetch('https://streaming-availability.p.rapidapi.com/v2/search/title?title=' + actualKeyword + '&country=us&show_type=movie&output_language=en', options)
  .then(response => response.json())
  .then(response => {
    for (var i = 0; i < 8; i++) {
    var movieCardInfo = document.getElementById('movie-info-' + i);
    var moviePosterEl = document.getElementById('movie-poster-' + i);
    var movieTitleEl = document.getElementById('movie-title-' + i)
    var overviewEl = document.getElementById('movie-overview-' + i);

    // create and populate movie poster element
    var moviePoster = document.createElement('img');
    moviePosterEl.appendChild(moviePoster);
    var primaryImageUrl = response.result[i].posterURLs.original;
    moviePoster.src = primaryImageUrl;
    moviePoster.style.maxWidth = '10vw';
      
    // create and populate title element
    var titleText = document.createElement('h2');
    movieTitleEl.appendChild(titleText);
    var title = response.result[i].title;
    titleText.textContent = title;
    
    // create and populate IMDB rating element
    var ratingText = document.createElement('h3');
    movieCardInfo.appendChild(ratingText);
    var rating = response.result[i].imdbRating;
    ratingText.textContent = 'IMDB Rating: ' + rating / 10 + '/10';
    
    // create and populate streaming options elements and fixes capitalization
    var streamingOptionText = document.createElement('h3');
    movieCardInfo.appendChild(streamingOptionText);
    // undefined streaming options break loop. if they are undefined, page displays 'Not Available'
    if (typeof response.result[i].streamingInfo.us !== 'undefined') {
      var streamingOption = response.result[i].streamingInfo.us;
      var streamingOptionKeyed = Object.keys(streamingOption);
      streamingOptionText.textContent = 'Streaming Locations: ' + streamingOptionKeyed;
      } else streamingOptionText.textContent = 'Not Available'

    // create and populate overview element
    var overviewText = document.createElement('p');
    overviewEl.appendChild(overviewText);
    var overview = response.result[i].overview;
    overviewText.textContent = overview;

    }
  })
    .catch(err => console.error(err));
keywordEntry = '';
}

// gets genre selection from local storage
// links api information and grabs
function genreGrab() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c460babefcmshc0d3062ab7fe4fcp161d67jsnd2ae94069a50',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
fetch('https://streaming-availability.p.rapidapi.com/v2/search/basic?country=us&services=netflix%2Cprime.buy%2Chulu.addon.hbo%2Cpeacock.free&output_language=en&show_type=movie&genre=' + genreChoice, options)
.then(response => response.json())
.then(response => {
  for (var i = 0; i < 8; i++) {
    var movieCardInfo = document.getElementById('movie-info-' + i);
    var moviePosterEl = document.getElementById('movie-poster-' + i);
    var movieTitleEl = document.getElementById('movie-title-' + i)
    var overviewEl = document.getElementById('movie-overview-' + i);

    // create and populate movie poster element
    var moviePoster = document.createElement('img');
    moviePosterEl.appendChild(moviePoster);
    var primaryImageUrl = response.result[i].posterURLs.original;
    moviePoster.src = primaryImageUrl;
    moviePoster.style.maxWidth = '10vw';
      
    // create and populate title element
    var titleText = document.createElement('h2');
    movieTitleEl.appendChild(titleText);
    var title = response.result[i].title;
    titleText.textContent = title;
    
    // create and populate IMDB rating element
    var ratingText = document.createElement('h3');
    movieCardInfo.appendChild(ratingText);
    var rating = response.result[i].imdbRating;
    ratingText.textContent = 'IMDB Rating: ' + rating / 10 + '/10';
    
    // create and populate streaming options elements and fixes capitalization
    var streamingOptionText = document.createElement('h3');
    movieCardInfo.appendChild(streamingOptionText);
    // undefined streaming options break loop. if they are undefined, page displays 'Not Available'
    if (typeof response.result[i].streamingInfo.us !== 'undefined') {
      var streamingOption = response.result[i].streamingInfo.us;
      var streamingOptionKeyed = Object.keys(streamingOption);
      streamingOptionText.textContent = 'Streaming Locations: ' + streamingOptionKeyed;
      } else streamingOptionText.textContent = 'Streaming Locations: Not Available'

    // create and populate overview element
    var overviewText = document.createElement('p');
    overviewEl.appendChild(overviewText);
    var overview = response.result[i].overview;
    overviewText.textContent = overview;

    }
  })
	.catch(err => console.error(err));
}
