module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Nation', {
    NationId: {
      allowNull: false,
      field: 'NationId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    CodeNat: {
      allowNull: true,
      field: 'CodeNat',
      type: DataTypes.STRING(10),
    },
    Name: {
      allowNull: true,
      field: 'Name',
      type: DataTypes.STRING(50),
    },
    Flag: {
      allowNull: true,
      field: 'Flag',
      type: DataTypes.STRING.BINARY,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
