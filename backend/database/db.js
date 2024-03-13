const mysql = require('mysql');
require('dotenv').config({path: './.env'});

const connection = mysql.createConnection({
    user: process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_NAME, 
    database : process.env.DB_DATABASE, 
  });
  
// Conexión a la base de datos
connection.connect((err) => {
    if (err) {
      console.error('Error de conexión a la base de datos: ', err);
      return;
    } 
    console.log('Conexión a la base de datos MySQL establecida');
  });
  
module.exports = connection;
