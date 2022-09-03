const { Sequelize, DataTypes } = require("sequelize");

/** connection database */
const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "adrianmgl",
  port: 5431,
  database: "checkIncheckOut",
  logging: false,
});

/** export DB */
module.exports = { db, DataTypes };
