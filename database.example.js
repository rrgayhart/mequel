const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'mequel_development'
});

module.exports = connection;