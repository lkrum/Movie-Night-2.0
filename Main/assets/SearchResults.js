// need to pull search input and genre checkbox info from local storage and keep it on page
// getItem
// need to integrate youtube API into search results

console.log('hello world')
var searchBtn = document.querySelector('#searchBtn')
var searchInput = document.querySelector('#input-title');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cee5de46b0msh2b762e13632954cp127afajsnca4144967f8a',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};

// gets search input from local storage
var actualKeyword = localStorage.getItem('Movie Title (send value to API)')
// var length = response.result.length;
// var randInt = Math.floor(Math.random * length); 
// links api information and grabs
fetch('https://streaming-availability.p.rapidapi.com/v2/search/title?title=' + actualKeyword + '&country=us&show_type=movie&output_language=en', options)
.then(response => response.json())
.then(response => {
  console.log(response);
  for (var i = 0; i < 10; i++) {
    // create and populate title element
    var titleText = document.createElement('h1');
    document.body.appendChild(titleText);
    var title = response.result[i].title;
    titleText.textContent = title;
    
    // create and populate IMDB rating element
    var ratingText = document.createElement('h2');
    document.body.appendChild(ratingText);
    var rating = response.result[i].imdbRating;
    ratingText.textContent = rating / 10 + '/10';

    
    var streamingOptionText = document.createElement('h2');
    document.body.appendChild(streamingOptionText);
    // undefined streaming options break loop. if they are undefined, page displays 'unavailable'
    if (typeof response.result[i].streamingInfo.us !== 'undefined') {
      var streamingOption = response.result[i].streamingInfo.us;
      var streamingOptionKeyed = Object.keys(streamingOption)
      console.log(streamingOption);
      streamingOptionText.textContent = streamingOptionKeyed;
      } else streamingOptionText.textContent = 'Not Available'

    // create and populate youtube embed
    var trailer = document.createElement('iframe');
    document.body.appendChild(trailer);
    var youtubeId = response.result[i].youtubeTrailerVideoId;
    console.log(youtubeId);
    // https://www.youtube.com/embed/VIDEO_ID_HERE

    // create and populate movie poster element
    var moviePoster = document.createElement('img');
    document.body.appendChild(moviePoster);
    // console.log(response.result[i]);
    var primaryImageUrl = response.result[i].posterURLs.original;
    moviePoster.src = primaryImageUrl;
    moviePoster.style.maxWidth = '30vw';
    }
  })
    .catch(err => console.error(err));
keywordEntry = '';

// // gets genre selection from local storage
// var genreChoice = localStorage.getItem('Genre (send value to API)');
// // console.log(genreChoice);
// // links api information and grabs
// fetch('https://streaming-availability.p.rapidapi.com/v2/search/basic?country=us&services=netflix%2Cprime.buy%2Chulu.addon.hbo%2Cpeacock.free&output_language=en&show_type=movie&genre=' + genreChoice, options)
// 	.then(response => response.json())
// 	.then(response => {
    
//   })
// 	.catch(err => console.error(err));
