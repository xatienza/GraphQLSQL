module.exports = function (sequelize, DataTypes) {
  return sequelize.define('IncWeather', {
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
    IncDay: {
      type: DataTypes.INTEGER,
      field: 'IncDay',
      allowNull: false,
    },
    Weather: {
      allowNull: false,
      field: 'Weather',
      type: DataTypes.STRING(255),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
