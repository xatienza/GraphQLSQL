module.exports = function (sequelize, DataTypes) {
  return sequelize.define('DeviceDriver', {
    DeviceDriverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
