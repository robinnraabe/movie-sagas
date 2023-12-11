const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
    let movieId = req.params.id;
    const query = `SELECT * FROM "movies" WHERE "id" = ${movieId};`;
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