// need to connect to API data
//// need function to get search button working
//// need to save search input in local storage
//// create search button variable
//// set variable in localStorage.setItem("search-input", searchInput)
//// need to save genre checkboxes in local storage
//// create variable/array for each genre
//// localStorage.setItem
// need to load results page when button is clicked
// location.assign(URL)

// sets variable for search button
var searchBtn = document.querySelector('#searchBtn');

// sets variable for input box
var searchInput = document.querySelector('#input-title');

// sets variable for genre radios
var genreBtns = document.querySelector('placeholder')

// when you click 'Search'
searchBtn.addEventListener('click', function() {
  // user Title input is stored as var.
  title = searchInput.value
  // if a Title has been entered
  if (title.length > 0) {
      // send that Title to local storage.
      localStorage.setItem('Movie Title (send value to API)', title);
      // if no title has been selected, and a genre has,
      } else {
        // store the selected radio as a var
        selectedGenre = document.querySelector('input[type="radio"]:checked')
        // convert the var to its value, since that is what will be fed to api.
        genreOutput = selectedGenre.value
        // send value to local storage.
        localStorage.setItem('Genre (send value to API)', genreOutput)
  }
})