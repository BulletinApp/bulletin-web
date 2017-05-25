'use strict';
module.exports = function(sequelize, DataTypes) {
  var Organization = sequelize.define('Organization', {
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    established: DataTypes.DATE,
    contactDetails: DataTypes.STRING,
    contactPerson: DataTypes.STRING,
    description: DataTypes.TEXT,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Organization.hasMany(models.BulletinEvent);
      }
    }
  });
  return Organization;
};
