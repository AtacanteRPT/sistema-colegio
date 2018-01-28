/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('horario_alumno', {
    idAsignatura: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'asignatura',
        key: 'id'
      }
    },
    idAlumno: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'alumno',
        key: 'idUsuario'
      }
    },
    hora_inicio: {
      type: DataTypes.TIME,
      allowNull: true
    },
    hora_fin: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'horario_alumno'
  });
};
