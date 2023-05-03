const mysql = require('mysql2');
require('dotenv').config();

const con = mysql.createConnection({
  HOST: process.env.HOST,
  USER: process.env.USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DATABASE,
});

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "badregplccom_userp",
//   password: "P@55w0rdP@55w0rd",
//   database: "badregplccom_opi",
// }); this is my remote server

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = con;

// badregplccom_feb20;
