import React, { useState, useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormControl, FormLabel, TextField, Button, 
    Select, MenuItem } from '@mui/material';

const AddMovie = () => {
    const genreList = useSelector(store => store.genres);
    const dispatch = useDispatch();
    const history = useHistory();

    const goBack = () => {
        history.push('/');
    }

    // Declares new movie
    let [newMovie, setMovie] = useState({});

    // Sets attributes of new movie
    const handleChange = (key) => (event) => {
        event.preventDefault();
        setMovie({...newMovie, 
            [key]: event.target.value, 
        })
    }

    // Sends new movie to Redux and returns to homepage
    const addNewMovie = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_MOVIE', payload: newMovie });
        goBack();
    }

    // Fetches list of genres on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);
    
    return (
        <div> 
            <FormControl>
                <FormLabel id='text-field' 
                sx={{ fontSize: '24px' }}>
                    Add a new movie
                </FormLabel>
                <TextField sx={{ 
                    backgroundColor: 'white', 
                    borderRadius: '5px', 
                    margin: '0px 3px', 
                    maxWidth: '180px' }}
                    required 
                    type='text' 
                    label='Title' 
                    value={newMovie.title} 
                    onChange={handleChange('title')} />
                <br />
                <TextField sx={{ 
                    backgroundColor: 'white', 
                    borderRadius: '5px', 
                    margin: '0px 3px', 
                    maxWidth: '180px'  }}
                    type='text' 
                    label='Description' 
                    value={newMovie.description} 
                    onChange={handleChange('description')} />
                <br />
                <TextField sx={{ 
                    backgroundColor: 'white', 
                    borderRadius: '5px', 
                    margin: '0px 3px', 
                    maxWidth: '180px'  }}
                    type='text' 
                    label='Image URL' 
                    value={newMovie.poster} 
                    onChange={handleChange('poster')} />
                <br />
                <Select sx={{ 
                    backgroundColor: 'white', 
                    borderRadius: '5px', 
                    margin: '0px 3px', 
                    maxWidth: '180px'  }}
                    value={newMovie.genre_id}
                    label='Genre'
                    onChange={handleChange('genre_id')}
                >
                    {genreList.map(genre => {
                        console.log('return"s genre:', genre.id);
                        return (
                            <MenuItem 
                                key={genre.id} 
                                value={genre.id}>
                                    {genre.name}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
            <br />
            <Button
                type='button'
                onClick={goBack}
                variant = 'outlined'
                sx={{ margin: '10px auto', 
                backgroundColor: 'plum', 
                color: 'white' }}
            >
                Cancel
            </Button>
            <Button 
                type='submit'
                onClick={addNewMovie}
                variant = 'outlined'
                sx={{ margin: '10px auto', 
                backgroundColor: 'plum', 
                color: 'white' }}
            >
                Save
            </Button>
        </div>
    );
}
export default AddMovie;