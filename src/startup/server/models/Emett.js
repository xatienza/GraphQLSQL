module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Emett', {
    EmettId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Code: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    PhisicCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    Attribute: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    DeviceDriverId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
