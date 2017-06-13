module.exports = function (sequelize, DataTypes) {
  return sequelize.define('StandingsTime', {
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
    Code: {
      allowNull: false,
      field: 'Code',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Ordering: {
      allowNull: false,
      field: 'Ordering',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    NumberId: {
      allowNull: false,
      field: 'NumberId',
      type: DataTypes.INTEGER,
    },
    Position: {
      allowNull: false,
      field: 'Position',
      type: DataTypes.INTEGER,
    },
    TieBreak: {
      allowNull: false,
      field: 'TieBreak',
      type: DataTypes.INTEGER,
    },
    Time_1: {
      allowNull: false,
      field: 'Time_1',
      type: DataTypes.INTEGER,
    },
    Time_2: {
      allowNull: false,
      field: 'Time_2',
      type: DataTypes.INTEGER,
    },
    Best_1: {
      allowNull: false,
      field: 'Best_1',
      type: DataTypes.INTEGER,
    },
    Best_2: {
      allowNull: false,
      field: 'Best_2',
      type: DataTypes.INTEGER,
    },
    Lap_1: {
      allowNull: false,
      field: 'Lap_1',
      type: DataTypes.INTEGER,
    },
    Lap_2: {
      allowNull: false,
      field: 'Lap_2',
      type: DataTypes.INTEGER,
    },
    TotalTime: {
      allowNull: false,
      field: 'TotalTime',
      type: DataTypes.INTEGER,
    },
    TotalLap: {
      allowNull: false,
      field: 'TotalLap',
      type: DataTypes.INTEGER,
    },
    GapFromFirst: {
      allowNull: false,
      field: 'GapFromFirst',
      type: DataTypes.INTEGER,
    },
    GapFromPrev: {
      allowNull: false,
      field: 'GapFromPrev',
      type: DataTypes.INTEGER,
    },
    GapLap: {
      allowNull: false,
      field: 'GapLap',
      type: DataTypes.INTEGER,
    },
    MaxSpeed: {
      allowNull: false,
      field: 'MaxSpeed',
      type: DataTypes.INTEGER,
    },
    AvgSpeed: {
      allowNull: false,
      field: 'AvgSpeed',
      type: DataTypes.INTEGER,
    },
    PoleRaceLap: {
      allowNull: false,
      field: 'PoleRaceLap',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
