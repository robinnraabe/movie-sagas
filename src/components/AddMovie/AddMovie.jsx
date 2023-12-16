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

    const textfieldStyle = {
        backgroundColor: 'lavender', 
        borderRadius: '20px', 
        margin: '0px 3px', 
        width: '400px'
    }

    const buttonStyle = {

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
        <div style= {{ width: '400px', margin: 'auto' }}> 
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <FormControl>
                <h2 style ={{ fontSize: '24px', color: 'lavender' }}>
                    Add a new movie
                </h2>
                <br />
                <TextField 
                    required 
                    type='text' 
                    label='Title' 
                    style={textfieldStyle}
                    value={newMovie.title} 
                    onChange={handleChange('title')} />
                <br />
                <TextField 
                    type='text' 
                    label='Description' 
                    style={textfieldStyle}
                    value={newMovie.description} 
                    onChange={handleChange('description')} />
                <br />
                <TextField 
                    type='text' 
                    label='Image URL' 
                    style={textfieldStyle}
                    value={newMovie.poster} 
                    onChange={handleChange('poster')} />
                <br />
                <Select sx={{ 
                    backgroundColor: 'lavender', 
                    borderRadius: '20px', 
                    margin: '0px 3px', 
                    maxWidth: '400px'  }}
                    value={newMovie.genre_id}
                    label='Genre'
                    onChange={handleChange('genre_id')}
                >
                    {genreList.map(genre => {
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
            <br /><br />
            <Button
                disableRipple
                type='button'
                onClick={goBack}
                style={buttonStyle}
                sx={[ {float: 'left'},
                {backgroundColor: 'plum'}, 
                {color: 'purple'},
                {fontWeight: 'bold'},
                {variant: 'contained'},
                {padding: '8px 20px'},
                {'&:hover': {backgroundColor: 'rgb(120, 130, 225)'}} ]}>
                Cancel
            </Button>
            <Button 
                disableRipple
                type='submit'
                onClick={addNewMovie}
                style={buttonStyle}
                sx={[ {float: 'right'},
                {backgroundColor: 'plum'}, 
                {color: 'purple'},
                {fontWeight: 'bold'},
                {variant: 'contained'},
                {padding: '8px 20px'},
                {'&:hover': {backgroundColor: 'rgb(120, 130, 225)'}} ]}>
                Save
            </Button>
        </div>
    );
}
export default AddMovie;