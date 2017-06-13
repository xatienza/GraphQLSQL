module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ChampTypeStanding', {
    ChampId: {
      allowNull: false,
      field: 'ChampId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    TypeStanding: {
      allowNull: false,
      field: 'TypeStanding',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
