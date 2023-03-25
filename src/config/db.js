const mysql = require('mysql');

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'movies',
});

db.connect((err) => {
  if (err) throw err;

  console.log('MySQL Connected...');
});

module.exports = db;
