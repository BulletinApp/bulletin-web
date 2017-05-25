'use strict';
module.exports = function(sequelize, DataTypes) {
  var Eventphoto = sequelize.define('Eventphoto', {
    filename: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Eventphoto.belongsTo(models.BulletinEvent);
      }
    }
  });
  return Eventphoto;
};
