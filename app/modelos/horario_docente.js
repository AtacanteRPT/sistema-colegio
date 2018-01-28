/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('horario_docente', {
    idAsignatura: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'asignatura',
        key: 'id'
      }
    },
    idDocente: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'alumno',
        key: 'idUsuario'
      }
    },
    idGrupo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'grupo',
        key: 'id'
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
    tableName: 'horario_docente'
  });
};
