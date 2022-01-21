const { DataTypes } = require('sequelize');
const sequelize = require('./sequelizeinstance');
const classes = require('./classes');
const inscriptions = require('./inscriptions');

const User = sequelize.define(
  'Users',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {},
);

User.hasMany(classes, {
  foreignKey: 'teacher_id',
});
User.hasMany(inscriptions, {
  foreignKey: 'student_id',
});

module.exports = User;
