'use strict';
module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define('todos', {
    id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return todo;
};
