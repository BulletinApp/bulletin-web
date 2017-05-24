'use strict';
module.exports = function(sequelize, DataTypes) {
  var BulletinEvent = sequelize.define('BulletinEvent', {
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.TEXT,
    fee: DataTypes.STRING,
    banner: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        BulletinEvent.belongsTo(models.Organization);
      }
    }
  });
  return BulletinEvent;
};
