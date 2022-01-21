const { DataTypes } = require('sequelize');
const sequelize = require('./sequelizeinstance');
const classes = require('./classes');

const Level = sequelize.define(
  'Levels',
  {
    desc_level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {

  },
);
Level.associate = () => {
  Level.hasMany(classes, {
    foreignKey: 'level_id',
  });
};

module.exports = Level;
