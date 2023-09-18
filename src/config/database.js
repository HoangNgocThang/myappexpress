const mysql = require('mysql2');
// const { Sequelize } = require('sequelize');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_DATABASE
  })

// const connection =  new Sequelize( process.env.DB_NAME_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: 'localhost',
//   dialect: 'mysql'
// });

module.exports = connection;