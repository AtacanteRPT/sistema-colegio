/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alumno', {
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
     nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sexo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    urlFoto: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    edad: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fecha_ingreso: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }

  }, {
    tableName: 'alumno'
  });
};

