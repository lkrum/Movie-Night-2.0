// need to pull search input and genre checkbox info from local storage and keep it on page
// getItem
// need to integrate youtube API into search results

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e23f87d15fmsh16684e11bab90f4p17d1eejsnca5dd7a7480b',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

fetch('https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=tt0001702%2Ctt0001856%2Ctt0001856', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));