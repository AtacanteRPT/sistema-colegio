/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    codigo_tarjeta: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ap_paterno: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ap_materno: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telefono: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(20),
      allowNull: false
    }

  }, {
    tableName: 'usuario'
  });
};

