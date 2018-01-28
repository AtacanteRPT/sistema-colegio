/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    paralelo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    turno: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'grupo'
  });
};
