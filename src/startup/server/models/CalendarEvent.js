module.exports = function (sequelize, DataTypes) {
  return sequelize.define('CalendarEvent', {
    EventCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Sequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ShortName: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
