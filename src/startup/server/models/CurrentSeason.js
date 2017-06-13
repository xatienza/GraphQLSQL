module.exports = function (sequelize, DataTypes) {
  return sequelize.define('CurrentSeason', {
    Year: {
      allowNull: false,
      field: 'Year',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Event: {
      allowNull: true,
      field: 'Event',
      type: DataTypes.STRING(50),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
