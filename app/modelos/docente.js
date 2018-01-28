/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('docente', {
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
    cedula: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    urlFoto: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    celular: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'docente'
  });
};
