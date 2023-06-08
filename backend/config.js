const { Sequelize, DataTypes } = require('sequelize');
const db = new Sequelize('CONNECT-E', 'postgres', 'Troll007', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
