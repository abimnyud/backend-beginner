const db = require('../config/db');

exports.getMovies = (req, res) => {
  db.query('SELECT * FROM movies', (err, rows) => {
    if (err) throw err;

    res.status(200).json(rows);
  });
};
