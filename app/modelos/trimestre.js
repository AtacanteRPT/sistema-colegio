/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trimestre', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tipo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'trimestre'
  });
};
