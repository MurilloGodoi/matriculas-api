const { DataTypes } = require('sequelize');
const sequelize = require('./sequelizeinstance');
const users = require('./users');
const inscriptions = require('./inscriptions');
const levels = require('./levels');

const Class = sequelize.define(
  'Classes',
  {
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {

  },
);

Class.hasMany(inscriptions, {
  foreignKey: 'class_id',
});
Class.belongsTo(levels, {
  foreignKey: 'level_id',
});
Class.associate = () => {
  Class.belongsTo(users, {
    foreignKey: 'teacher_id',
  });
};

module.exports = Class;
