const connection = require('./database.js');

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});