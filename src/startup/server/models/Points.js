module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Points', {
    TypePoints: {
      allowNull: false,
      field: 'TypePoints',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Rank: {
      allowNull: true,
      field: 'Rank',
      primaryKey: true,      
      type: DataTypes.STRING(10),
    },
    Points: {
      allowNull: true,
      field: 'Points',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
