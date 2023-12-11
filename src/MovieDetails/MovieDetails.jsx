import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Displays the details for the selected movie
function MovieDetails({id}) {
  const movie = useSelector(store => store.details);
  console.log('movie details:', movie);
  console.log(movie.title);
  console.log(movie.description);
  console.log(movie.poster);

  // Return to home (MovieList) page
  const history = useHistory();
  const goBack = () => {
    history.push('/');
  }

  // Displays the title, poster, genres, and description 
  // for the selected movie
  return (
    <div data-testid="movieDetails">
      <h1>{movie[0].title}</h1>
      <br />
      <img src={movie[0].poster} />
      <br/>
      {movie.map(genre => {
          return (
              <h3>{genre.name}</h3>
          );
        })}
      <p>{movie[0].description}</p>
      <button onClick={goBack} data-testid="toList">
        Back to movie list
      </button>
    </div>
  );
}

export default MovieDetails;





