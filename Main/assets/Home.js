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
var genreOptions = []

// variables
var apiURL = 'streaming-availability.p.rapidapi.com';
var apiKey = 'e23f87d15fmsh16684e11bab90f4p17d1eejsnca5dd7a7480b';

// $('#searchBtn').click(getApi() {
//   fetch(requestUrl)
//     .then(function (response) {
//     return response.json();
//   })
//     .then(function (data) {
//       console.log(data);
// });
// });

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e23f87d15fmsh16684e11bab90f4p17d1eejsnca5dd7a7480b',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};

fetch('https://streaming-availability.p.rapidapi.com/v2/search/title?title=star%20wars&country=us&show_type=movie&output_language=en' , options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));