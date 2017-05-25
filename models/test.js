'use strict';
module.exports = function(sequelize, DataTypes) {
  var test = sequelize.define('test', {
    col: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return test;
};