import { Button } from "@mui/material";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function Header() {
    const history = useHistory();
    const dispatch = useDispatch();
    const pushed = useSelector(store => store.pushed);

    // routes to addMovie page ONLY if not routing from addMovie page
    const addMovie = () => {
        // checks if current route is addMovie page
        if (pushed === false) {
            history.push('/add');
            // sets reducer to show that route is currently on addMovie page
            dispatch({ type: 'SET_PUSHED', payload: true });
        }
    }

    return (
        <header>
            The Movies Saga!
            <br />
            <Button 
                type='button' 
                variant='contained' 
                sx={[
                    {border: '1px solid black'},
                    {color: 'purple'}, 
                    {fontWeight: 'bold'}, 
                    {backgroundColor: 'plum'}, 
                    {boxShadow: '-5px 5px 5px black'},
                    {marginTop: '15px'},
                    {'&:hover': {backgroundColor: 'rgb(180, 90, 180)'}}
                ]}
                onClick={addMovie}>Add new movie</Button>
        </header>
    );
}    

export default Header;