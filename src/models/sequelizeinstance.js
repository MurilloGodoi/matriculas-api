const { Sequelize } = require('sequelize');
const sequelizeconfig = require('../config/config.json');

module.exports = new Sequelize(sequelizeconfig.development);
