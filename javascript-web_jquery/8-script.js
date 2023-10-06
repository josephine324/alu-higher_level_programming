$.ajax({
    type: 'GET',
    url: 'https://swapi-api.alx-tools.com/api/films/?format=json'
})
.done(function(response){
    movies = response.results;
    movies.forEach((movie) => {
        console.log(movie.title)
        $('#list_movies').append(`<li>${movie.title}</li>`)
    })
})
