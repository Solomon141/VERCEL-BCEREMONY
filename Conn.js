const mysql = require('mysql2');
require('dotenv').config();

// const con = mysql.createConnection({
//   HOST: process.env.HOST,
//   USER: process.env.USER,
//   DB_PASSWORD: process.env.DB_PASSWORD,
//   DATABASE: process.env.DATABASE,
// });

const con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = con;

// badregplccom_feb20;
