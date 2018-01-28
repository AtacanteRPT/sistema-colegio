/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inscribe', {
    idAdministrador: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'administrador',
        key: 'idUsuario'
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
    idGrupo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'grupo',
        key: 'id'
      }
    },
    fecha_inscripcion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'inscribe'
  });
};
