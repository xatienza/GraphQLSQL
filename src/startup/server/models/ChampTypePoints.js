module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ChampTypePoints', {
    ChampId: {
      allowNull: false,
      field: 'ChampId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    TypePoints: {
      allowNull: false,
      field: 'TypePoints',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
