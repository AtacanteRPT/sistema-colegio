/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupo_pasa_clases', {
    idAula: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'aula',
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
    idGrupo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'grupo',
        key: 'id'
      }
    }
  }, {
    tableName: 'grupo_pasa_clases'
  });
};
