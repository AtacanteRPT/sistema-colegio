/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aula', {
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
    edificio: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'aula'
  });
};
