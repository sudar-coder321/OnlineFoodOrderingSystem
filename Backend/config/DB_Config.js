const mysql = require('mysql');
require('dotenv').config();

config = {
  host: 'localhost',
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};
const con = mysql.createConnection(config);
con.connect((err) => {
  if (err) throw err;
  console.log('DB CONNECTED');
});

module.exports = {
  con: mysql.createConnection(config),
};
