module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Competitors', {
    CompetitorId: {
      allowNull: false,
      field: 'CompetitorId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Name: {
      allowNull: true,
      field: 'Name',
      type: DataTypes.STRING(50),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
