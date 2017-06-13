module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ClockEvent', {
    Season: {
      allowNull: false,
      field: 'Season',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    ChampId: {
      allowNull: false,
      field: 'ChampId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    EventId: {
      allowNull: false,
      field: 'EventId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    SessionId: {
      allowNull: false,
      field: 'SessionId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    LocalTime: {
      allowNull: false,
      field: 'LocalTime',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    SincroTime: {
      allowNull: true,
      field: 'SincroTime',
      type: DataTypes.INTEGER,
    },
    Information: {
      allowNull: true,
      field: 'Information',
      type: DataTypes.STRING(255),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
