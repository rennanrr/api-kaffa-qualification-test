const parseDbUrl = require('parse-database-url');
const Sequelize = require('sequelize');

let dbConfig = parseDbUrl(process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/KaffaDB');

module.exports = {
  dev: {
    username: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    host: dbConfig.host,
    dialect: 'postgres'
  },
  test: {
    username: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    host: dbConfig.host,
    dialect: 'postgres'
  },
  qas: {
    username: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    host: dbConfig.host,
    dialect: 'postgres'
  },
  prod: {
    username: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    host: dbConfig.host,
    dialect: 'postgres'
  }
};
