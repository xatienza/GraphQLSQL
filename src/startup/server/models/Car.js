module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Car', {
    CarId: {
      allowNull: false,
      field: 'CarId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Name: {
      allowNull: true,
      field: 'Name',
      type: DataTypes.STRING(50),
    },
    Photo: {
      allowNull: true,
      field: 'Photo',
      type: DataTypes.STRING.BINARY,
    },
    FileName: {
      allowNull: true,
      field: 'FileName',
      type: DataTypes.STRING(80),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
