const mysql = require("mysql");

const { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } = require("../config");

const conexion = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

module.exports = conexion;
