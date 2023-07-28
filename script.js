window.onload = () => {
    getOriginals()
    getTrendingNow()
    getTopRated()
  }
  
  function fetchMovies(url, dom_element, path_type) {
  
  fetch(url)
  .then(response =>{
    if(response.ok){
      return response.json()
    }else {
      throw new Error('Something went wrong')
    }
  }).then(data => {
    showMovies(data, dom_element, path_type)
  }).catch(error => {
    console.log(error)
  })
    
  }
  fetchMovies('https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213')
  //Function that displays the movies to the DOM
  showMovies = (movies, dom_element, path_type) => {
  
  let moviesEl = document.querySelector(dom_element )
  console.log(movies.results)
   
  for (let movie of movies.results){
    
    let imageElement = document.createElement('img')
    
    imageElement.setAttribute('data-id', movie.id)
  
    imageElement.src = 
      `https://image.tmdb.org/t/p/original${movie[path_type]}`
  
  moviesEl.appendChild(imageElement)
  }
    
  }
  
  //Function that fetches Netflix Originals
  function getOriginals() {
  let url = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
    
  fetchMovies(url, '.original__movies', 'poster_path')
  }
  // Function that fetches Trending Movies
  function getTrendingNow() {
  let url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
  
  fetchMovies(url, '#trending', 'backdrop_path')
    
  }
  //Function that fetches Top Rated Movies
  function getTopRated() {
  let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'
  
    fetchMovies(url, '#top_rated', 'backdrop_path')
  }
  
  