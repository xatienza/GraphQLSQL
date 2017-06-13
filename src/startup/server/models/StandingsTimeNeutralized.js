module.exports = function (sequelize, DataTypes) {
  return sequelize.define('StandingsTimeNeutralized', {
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
    Progressive: {
      allowNull: false,
      field: 'Progressive',
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
      allowNull: true,
      field: 'NumberId',
      type: DataTypes.INTEGER,
    },
    Position: {
      allowNull: true,
      field: 'Position',
      type: DataTypes.INTEGER,
    },
    Time: {
      allowNull: true,
      field: 'Time',
      type: DataTypes.INTEGER,
    },
    Lap: {
      allowNull: true,
      field: 'Lap',
      type: DataTypes.INTEGER,
    },
    GapFromFirst: {
      allowNull: true,
      field: 'GapFromFirst',
      type: DataTypes.INTEGER,
    },
    GapFromPrev: {
      allowNull: true,
      field: 'GapFromPrev',
      type: DataTypes.INTEGER,
    },
    GapLap: {
      allowNull: true,
      field: 'GapLap',
      type: DataTypes.INTEGER,
    },
    CheckMark: {
      allowNull: true,
      field: 'CheckMark',
      type: DataTypes.INTEGER,
    },
    CheckPosChange: {
      allowNull: true,
      field: 'CheckPosChange',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
