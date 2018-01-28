/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asistencia_alumno', {
    idAlumno: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'alumno',
        key: 'idUsuario'
      }
    },
    idTrimestre: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'trimestre',
        key: 'id'
      }
    },
    dia: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    control_asistencia: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    hora_llegada: {
      type: DataTypes.TIME,
      allowNull: true
    },
    hora_salida: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'asistencia_alumno'
  });
};
