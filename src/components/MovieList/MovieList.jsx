import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './MovieList.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function MovieList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  const addMovie = () => {
    history.push('/add');
  }

  const getDetails = (id) => {
    axios.get(`/api/movies/${id}`).then(response => {
      dispatch({ type: 'SET_DETAILS', payload: response.data });
      history.push('/details');
    })
      .catch(error => {
        console.log('Error getting movie details:', error);
        alert('Something went wrong!');
      })
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <section>
        <button onClick={addMovie}>Add new movie</button>
      </section>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={movie.poster} width='200px'
                data-testid="toDetails" 
                alt={movie.title}
                onClick={() => getDetails(movie.id)}
              />
            </div>
          );
        })}
      </section>
    </main>

  );
}


export default MovieList;
