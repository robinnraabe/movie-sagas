import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Stack, Box } from '@mui/material';
import { List, ListItem, ListDivider } from '@mui/joy';

// Displays the details for the selected movie
function MovieDetails({id}) {
  const movie = useSelector(store => store.details);

  // Return to home (MovieList) page
  const history = useHistory();
  const goBack = () => {
    history.push('/');
  }

  const style = {
    color: 'lavender',
    margin: 'auto'
  }

  const pStyle = {
    color: 'lavender',
    marginTop: '20px',
    marginLeft: '20px',
  }

  // Displays the title, poster, genres, and description 
  // for the selected movie
  return (
    <div data-testid="movieDetails">
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h1 style={style}>{movie[0].title}</h1>
      <Stack direction="row" spacing={2} sx={{ margin: 'auto', width: '60%', justifyContent: 'center' }}>
        <Box style={style} >
          <br /><br />
          <img src={movie[0].poster} width='250px'/>
          <br /><br />
          <List
            orientation='horizontal'
            variant='outlined'
            sx={{
              borderRadius: '10px',
              borderColor: 'lavender',
              color: 'lavender',
              width: 'fit-content',
              margin: 'auto'
            }}>
            {movie.map((genre, i, movie) => {
              if (movie.length - 1 === i) {
                return (
                  <ListItem key={genre.name} style={style}>
                    {genre.name}
                  </ListItem>
                )
              } 
              else {
                return (
                  <>
                    <ListItem key={genre.name} style={style}>
                      {genre.name}
                    </ListItem>
                    <ListDivider inset="gutter" />
                  </>
                )
              }
            })}
          </List>
        </Box>
        <Box style={pStyle}>
          <p style={{textAlign: 'left' }}>{movie[0].description}</p>
          <Button onClick={goBack} data-testid="toList" disableRipple
          sx={[
            {border: '1px solid black'},
            {color: 'purple'}, 
            {fontWeight: 'bold'}, 
            {backgroundColor: 'plum'}, 
            {boxShadow: '-5px 5px 5px rgb(20, 20, 20)'},
            {marginTop: '15px'},
            {padding: '10px 15px'},
            {'&:hover': {backgroundColor: 'rgb(120, 130, 225)'}}]}>
            Back to movie list
          </Button>
      </Box>
      </Stack>
    </div>
  );
}

export default MovieDetails;





