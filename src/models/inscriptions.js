const { DataTypes } = require('sequelize');
const sequelize = require('./sequelizeinstance');
const users = require('./users');
const classes = require('./classes');

const Inscription = sequelize.define(
  'Inscriptions',
  {
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {

  },
);
Inscription.associate = () => {
  Inscription.belongsTo(users, {
    foreignKey: 'student_id',
  });
  Inscription.belongsTo(classes, {
    foreignKey: 'class_id',
  });
};

module.exports = Inscription;
