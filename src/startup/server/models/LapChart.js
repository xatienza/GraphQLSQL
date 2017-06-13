module.exports = function (sequelize, DataTypes) {
  return sequelize.define('LapChart', {
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
    Ordering: {
      allowNull: false,
      field: 'Ordering',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    NumLap: {
      allowNull: false,
      field: 'NumLap',
      type: DataTypes.INTEGER,
    },
    NumberId: {
      allowNull: false,
      field: 'NumberId',
      type: DataTypes.INTEGER,
    },
    LapTime: {
      allowNull: false,
      field: 'LapTime',
      type: DataTypes.INTEGER,
    },
    GapFromFirst: {
      allowNull: false,
      field: 'GapFromFirst',
      type: DataTypes.INTEGER,
    },
    Doubled: {
      allowNull: false,
      field: 'Doubled',
      type: DataTypes.INTEGER,
    },
    Pos: {
      allowNull: true,
      field: 'Pos',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
