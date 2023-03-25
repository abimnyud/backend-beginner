const express = require('express');
const { getMovies } = require('../controllers/movie.controller');

const router = express.Router();

router.get('/api/movies', getMovies);

module.exports = router;
