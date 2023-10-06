const request = require('request');

// Function to fetch and print characters of a Star Wars movie
function getCharactersByMovieId(movieId) {
  // Define the URL to fetch movie information
  const movieUrl = `https://swapi.dev/api/films/${movieId}/`;

  request(movieUrl, (error, response, body) => {
    if (error) {
      console.error('Error fetching movie data:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(`Error: HTTP Status ${response.statusCode}`);
      return;
    }

    try {
      const movieData = JSON.parse(body);
      const characters = movieData.characters;

      // Fetch and print character names
      characters.forEach((characterUrl) => {
        request(characterUrl, (error, response, body) => {
          if (error) {
            console.error('Error fetching character data:', error);
          } else {
            const characterData = JSON.parse(body);
            console.log(characterData.name);
          }
        });
      });
    } catch (parseError) {
      console.error('Error parsing movie data:', parseError);
    }
  });
}

// Get movie ID from command line argument
const movieId = process.argv[2];

if (!movieId) {
  console.error('Usage: node 101-starwars_characters.js <movie_id>');
} else {
  getCharactersByMovieId(movieId);
}

