module.exports = function (sequelize, DataTypes) {
  return sequelize.define('CheckValue', {
    ChampId: {
      allowNull: false,
      field: 'ChampId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    TimeValue: {
      allowNull: false,
      field: 'TimeValue',
      type: DataTypes.INTEGER,
    },
    SpeedValue: {
      allowNull: false,
      field: 'SpeedValue',
      type: DataTypes.INTEGER,
    },
    MinSpeed: {
      allowNull: false,
      field: 'MinSpeed',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
