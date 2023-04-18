// need to connect to API data
//  need function to get search button working
  // need to save search input in local storage
    // create search button variable
    // set variable in localStorage.setItem("search-input", searchInput)
  // need to save genre checkboxes in local storage
    // create variable/array for each genre
      // localStorage.setItem
  // need to load results page when button is clicked
    // location.assign(URL)
  
// variable expressions
// var searchBtn = $('#searchBtn');
// var genreOptions = []

// variables
// var apiURL = 'streaming-availability.p.rapidapi.com';
// var apiKey = 'e23f87d15fmsh16684e11bab90f4p17d1eejsnca5dd7a7480b';

// $('#searchBtn').click(getApi() {
//   fetch(requestUrl)
//     .then(function (response) {
//     return response.json();
//   })
//     .then(function (data) {
//       console.log(data);
// });
// });

console.log('hello world')
var searchBtn = document.querySelector('#searchBtn')
var searchInput = document.querySelector('#input-title');
console.log(searchInput.value);

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cee5de46b0msh2b762e13632954cp127afajsnca4144967f8a',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};

// var searchBtn = document.createElement('button')
// document.body.append(searchBtn)
// searchBtn.textContent = "Search Keyword"

// var keywordInput = document.createElement('input')

searchBtn.addEventListener('click', function() {
  var keywordEntry = searchInput.value
  localStorage.setItem('keyword', keywordEntry)
  var actualKeyword = localStorage.getItem('keyword')
  fetch('https://streaming-availability.p.rapidapi.com/v2/search/title?title=' + actualKeyword + '&country=us&show_type=movie&output_language=en', options)
  .then(response => response.json())
  .then(response => {
    for (var i = 0; i < 5; i++) {
      var movieposter = document.createElement('img')
      document.body.appendChild(movieposter)
      console.log(response.result[i]) 
      var primaryImageUrl = response.result[i].backdropURLs.original
      movieposter.src = primaryImageUrl
      movieposter.style.maxWidth = '30vw'
        }})
    location.assign('SearchResults.html')
  .catch(err => console.error(err));
  keywordEntry = ''
  })