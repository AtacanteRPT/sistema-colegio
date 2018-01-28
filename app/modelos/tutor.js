/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tutor', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
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
    nombre_completo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    celular: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    telefono: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'tutor'
  });
};
