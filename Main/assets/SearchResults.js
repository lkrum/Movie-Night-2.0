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
      'X-RapidAPI-Key': '0611b75592mshd46c95543061f57p1334b9jsnac720c0d64b4',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
fetch('https://streaming-availability.p.rapidapi.com/v2/search/title?title=' + actualKeyword + '&country=us&show_type=movie&output_language=en', options)
.then(response => response.json())
.then(response => {
  for (var i = 0; i < 8; i++) {
    var movieCard = document.getElementById('movie-' + i);

    // create and populate title element
    var titleText = document.createElement('h1');
    movieCard.appendChild(titleText);
    var title = response.result[i].title;
    titleText.textContent = title;
    
    // create and populate IMDB rating element
    var ratingText = document.createElement('h2');
    movieCard.appendChild(ratingText);
    var rating = response.result[i].imdbRating;
    ratingText.textContent = 'IMDB Rating: ' + rating / 10 + '/10';
    
    // create and populate streaming options elements and fixes capitalization
    var streamingOptionText = document.createElement('h2');
    movieCard.appendChild(streamingOptionText);
    // undefined streaming options break loop. if they are undefined, page displays 'Not Available'
    if (typeof response.result[i].streamingInfo.us !== 'undefined') {
      var streamingOption = response.result[i].streamingInfo.us;
      var streamingOptionKeyed = Object.keys(streamingOption);
      streamingOptionText.textContent = 'Streaming Locations: ' + streamingOptionKeyed;
      } else streamingOptionText.textContent = 'Not Available'

    // create and populate youtube embed
    // !(ChatGPT)
    var trailer = document.createElement('embed')
    var youtubeId = response.result[i].youtubeTrailerVideoId;
    trailer.setAttribute("src", 'https://www.youtube.com/embed/' + youtubeId);
    trailer.setAttribute("width", "560");
    trailer.setAttribute("height", "315");
    movieCard.appendChild(trailer);

    // create and populate overview element
    var overviewText = document.createElement('p');
    movieCard.appendChild(overviewText);
    var overview = response.result[i].overview;
    overviewText.textContent = overview;

    // create and populate movie poster element
    var moviePoster = document.createElement('img');
    movieCard.appendChild(moviePoster);
    var primaryImageUrl = response.result[i].posterURLs.original;
    moviePoster.src = primaryImageUrl;
    moviePoster.style.maxWidth = '30vw';
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
      'X-RapidAPI-Key': '0611b75592mshd46c95543061f57p1334b9jsnac720c0d64b4',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
fetch('https://streaming-availability.p.rapidapi.com/v2/search/basic?country=us&services=netflix%2Cprime.buy%2Chulu.addon.hbo%2Cpeacock.free&output_language=en&show_type=movie&genre=' + genreChoice, options)
.then(response => response.json())
.then(response => {
  for (var i = 0; i < 8; i++) {
    var movieCard = document.getElementById('movie-' + i);

    // create and populate title element
    var titleText = document.createElement('h1');
    movieCard.appendChild(titleText);
    var title = response.result[i].title;
    titleText.textContent = title;
    
    // create and populate IMDB rating element
    var ratingText = document.createElement('h2');
    movieCard.appendChild(ratingText);
    var rating = response.result[i].imdbRating;
    ratingText.textContent = 'IMDB Rating: ' + rating / 10 + '/10';
    
    // create and populate streaming options elements and fixes capitalization
    var streamingOptionText = document.createElement('h2');
    movieCard.appendChild(streamingOptionText);
    // undefined streaming options break loop. if they are undefined, page displays 'Not Available'
    if (typeof response.result[i].streamingInfo.us !== 'undefined') {
      var streamingOption = response.result[i].streamingInfo.us;
      var streamingOptionKeyed = Object.keys(streamingOption);
      streamingOptionText.textContent = 'Streaming Locations: ' + streamingOptionKeyed;
      } else streamingOptionText.textContent = 'Not Available'

    // create and populate youtube embed
    // !(ChatGPT)
    var trailer = document.createElement('embed')
    var youtubeId = response.result[i].youtubeTrailerVideoId;
    trailer.setAttribute("src", 'https://www.youtube.com/embed/' + youtubeId);
    trailer.setAttribute("width", "560");
    trailer.setAttribute("height", "315");
    movieCard.appendChild(trailer);

    // create and populate overview element
    var overviewText = document.createElement('p');
    movieCard.appendChild(overviewText);
    var overview = response.result[i].overview;
    overviewText.textContent = overview;

    // create and populate movie poster element
    var moviePoster = document.createElement('img');
    movieCard.appendChild(moviePoster);
    var primaryImageUrl = response.result[i].posterURLs.original;
    moviePoster.src = primaryImageUrl;
    moviePoster.style.maxWidth = '30vw';
    }
  })
	.catch(err => console.error(err));
}
