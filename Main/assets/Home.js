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
  
var searchBtn = document.querySelector('#searchBtn');
var searchInput = document.querySelector('#input-title');
var genreBtns = document.querySelector(i have no fkn idea)
// 'Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film-Noir', 'Game-Show', 'History', 
// empty array for genres
var searchedGenres = [];
var genreOptions = [
  {
    genre: 'Action',
    id: genre1,
  }
];

// var keywordEntry = searchInput.value;
// localStorage.setItem('keyword', keywordEntry);
// location.assign('SearchResults.html');
// });
searchBtn.addEventListener('click', function() {
  if (title) {
      var keywordEntry = searchInput.value;
      localStorage.setItem('keyword', keywordEntry);
      location.assign('SearchResults.html');
  } else {

  }
})

functionName(i) {

  var genreOption = document.querySelector('#genre' + i).value;
}
  // !Get all radio buttons with name="myRadio"
  // const radioButtons = document.getElementsByName("myRadio");

  // !Loop through radio buttons
  // radioButtons.forEach((radioButton) => {
    // !Add event listener for change event
  //   radioButton.addEventListener("change", () => {
      // !Check if radio button is selected
  //     if (radioButton.checked) {
  //       console.log(`Radio button with value ${radioButton.value} was selected`);
  //     }
  //   });
  // });