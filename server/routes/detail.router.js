const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
    let movieId = req.params.id;
    const query = `SELECT title, poster, description, name FROM movies
    JOIN movies_genres ON movies.id = movies_genres.movie_id
    JOIN genres ON genres.id = movies_genres.genre_id
    WHERE movie_id = ${movieId};`;
    pool.query(query)
      .then((result) => {
        console.log('result:', result.rows);
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: Get movie details', err);
        res.sendStatus(500);
    })
  });

  module.exports = router;