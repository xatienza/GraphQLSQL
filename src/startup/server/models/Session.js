module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Session', {
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
    Kind: {
      allowNull: true,
      field: 'Kind',
      type: DataTypes.INTEGER,
    },
    Progressive: {
      allowNull: true,
      field: 'Progressive',
      type: DataTypes.INTEGER,
    },
    Name: {
      allowNull: true,
      field: 'Name',
      type: DataTypes.STRING(40),
    },
    ShortName: {
      allowNull: true,
      field: 'ShortName',
      type: DataTypes.STRING(50),
    },
    DateOfStart: {
      allowNull: true,
      field: 'DateOfStart',
      type: DataTypes.DATE,
    },
    DateOfEnd: {
      allowNull: true,
      field: 'DateOfEnd',
      type: DataTypes.DATE,
    },
    TimeOfStart: {
      allowNull: true,
      field: 'TimeOfStart',
      type: DataTypes.INTEGER,
    },
    TimeOfEnd: {
      allowNull: true,
      field: 'TimeOfEnd',
      type: DataTypes.INTEGER,
    },
    Validity: {
      allowNull: true,
      field: 'Validity',
      type: DataTypes.INTEGER,
    },
    Situation: {
      allowNull: true,
      field: 'Situation',
      type: DataTypes.INTEGER,
    },
    MaxTime: {
      allowNull: true,
      field: 'MaxTime',
      type: DataTypes.INTEGER,
    },
    NumLaps: {
      allowNull: true,
      field: 'NumLaps',
      type: DataTypes.INTEGER,
    },
    Rules: {
      allowNull: true,
      field: 'Rules',
      type: DataTypes.INTEGER,
    },
    Linked: {
      allowNull: true,
      field: 'Linked',
      type: DataTypes.INTEGER,
    },
    WeatherCondition: {
      allowNull: true,
      field: 'WeatherCondition',
      type: DataTypes.INTEGER,
    },
    AirTemperature: {
      allowNull: true,
      field: 'AirTemperature',
      type: DataTypes.INTEGER,
    },
    GroundTemperature: {
      allowNull: false,
      field: 'GroundTemperature',
      type: DataTypes.INTEGER,
    },
    Umidity: {
      allowNull: false,
      field: 'Umidity',
      type: DataTypes.INTEGER,
    },
    TrackCondition: {
      allowNull: false,
      field: 'TrackCondition',
      type: DataTypes.INTEGER,
    },
    WindSpeed: {
      allowNull: false,
      field: 'WindSpeed',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
