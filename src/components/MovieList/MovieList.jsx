import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './MovieList.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { Grid, Card, CardContent, Button } from '@mui/material';

function MovieList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

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

  const cardStyle = {
    marginTop: '10px',
    display: 'flex', 
    flexDirection: 'column', 
    borderRadius: '10px', 
    outlineStyle: 'solid',
    backgroundColor: 'lavender',
    outlineColor: `rgb(20, 20, 20)`, 
    boxShadow: `-10px 10px 20px rgb(20, 20, 20)`,
    color: 'rgb(20, 20, 20)',
    maxWidth: '250px',
    height: '460px',
    marginBottom: 'auto'
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
    dispatch({ type: 'SET_PUSHED', payload: false });
  }, []);

  return (
    <main>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <Grid container spacing={2}>
        {movies.map(movie => {
          return (
            <Grid item m={3} className="movies" key={movie.id}>
              <Card data-testid='movieItem' style={cardStyle}>
                <CardContent>
                  <h3>{movie.title}</h3>
                </CardContent>
                <CardContent sx={{ padding: '0px', marginTop: 'auto' }}>
                  <img src={movie.poster} width='250px'
                    data-testid="toDetails" 
                    alt={movie.title}
                    onClick={() => getDetails(movie.id)}
                  />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
}


export default MovieList;
