module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Grid', {
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
      type: DataTypes.INTEGER,
      field: 'Ordering',
      allowNull: false,
      primaryKey: true,
    },
    Row: {
      allowNull: false,
      field: 'Row',
      type: DataTypes.INTEGER,
    },
    Col: {
      allowNull: false,
      field: 'Col',
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
    Time: {
      allowNull: false,
      field: 'Time',
      type: DataTypes.INTEGER,
    },
    GapFromFirst: {
      allowNull: false,
      field: 'GapFromFirst',
      type: DataTypes.INTEGER,
    },
    GapLap: {
      allowNull: false,
      field: 'GapLap',
      type: DataTypes.INTEGER,
    },
    Status: {
      allowNull: false,
      field: 'Status',
      type: DataTypes.INTEGER,
    },
    StatusExcluded: {
      allowNull: false,
      field: 'StatusExcluded',
      type: DataTypes.INTEGER,
    },
    OriginalPosition: {
      allowNull: false,
      field: 'OriginalPosition',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
