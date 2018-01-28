/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asignatura', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    clave: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'asignatura'
  });
};
