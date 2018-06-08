'user strict';

const logger = require('../../tools/logger');

const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.database,
  process.env.username,
  process.env.password,
  {
    host: process.env.host,
    dialect: process.env.dialect,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: false
  }
);

sequelize
  .authenticate()
  .then(() => {
    /*eslint-disable */
    console.log('Database connected.');
    /* eslint-enable */
  })
  .catch(err => {
    logger.critical(err);
  });

let database = {};
database.sequelize = sequelize;
database.Sequelize = Sequelize;

fs
  .readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    database[model.name] = model;
  });

Object.keys(database).forEach(modelName => {
  if ('associate' in database[modelName])
    database[modelName].associate(database);
});

database.sequelize
  .sync()
  .then(() => {
    /*eslint-disable */
    console.log('Tables created');
    /* eslint-enable */
  })
  .catch(err => {
    logger.critical(err);
  });

module.exports = database;
