/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('calificacion', {
    idAlumno: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'alumno',
        key: 'idUsuario'
      }
    },
    idAsignatura: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'asignatura',
        key: 'id'
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
    dps: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    primer_ronda: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    segunda_ronda: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    tercera_ronda: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    proyecto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'calificacion'
  });
};
