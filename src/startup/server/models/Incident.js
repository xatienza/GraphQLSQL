module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Incident', {
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
    DriverId: {
      allowNull: false,
      field: 'DriverId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    IncTime: {
      type: DataTypes.STRING(50),
      field: 'IncTime',
      allowNull: false,
      primaryKey: true,
    },
    Note1: {
      allowNull: false,
      field: 'Note1',
      type: DataTypes.STRING(1),
    },
    Note2: {
      allowNull: false,
      field: 'Note2',
      type: DataTypes.STRING(255),
    },
    Note3: {
      allowNull: false,
      field: 'Note3',
      type: DataTypes.STRING(255),
    },
    Position: {
      allowNull: false,
      field: 'Position',
      type: DataTypes.STRING(10),
    },
    NumGara: {
      allowNull: false,
      field: 'NumGara',
      type: DataTypes.STRING(3),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
