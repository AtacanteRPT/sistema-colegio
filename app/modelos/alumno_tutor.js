/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alumno_tutor', {
    idAlumno: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'alumno',
        key: 'idUsuario'
      }
    },
    idTutor: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'tutor',
        key: 'id'
      }
    },
    relacion_alumno_tutor: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'alumno_tutor'
  });
};
