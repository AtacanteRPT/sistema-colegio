/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('administrador', {
    idUsuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    cargo: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'administrador'
  });
};
