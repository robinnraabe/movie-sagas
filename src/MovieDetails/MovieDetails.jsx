import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Displays the details for the selected movie
function MovieDetails({id}) {
  const movie = useSelector(store => store.details);
  console.log('movie details:', movie);
  console.log(movie.title);
  console.log(movie.description);
  console.log(movie.poster);

  const history = useHistory();
  const goBack = () => {
    history.push('/');
  }

  return (
    <div data-testid="movieDetails">
      <h2>{movie[0].title}</h2>
      <br />
      <img src={movie[0].poster} />
      <br/>
      <p>{movie[0].description}</p>
      {/* insert genre list here! */}
      <button onClick={goBack} data-testid="toList">
        Back to movie list
      </button>
    </div>
  );
}

export default MovieDetails;





