module.exports = function (sequelize, DataTypes) {
  return sequelize.define('SessionPost', {
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
    PostId: {
      allowNull: false,
      field: 'PostId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Progressive: {
      allowNull: true,
      field: 'Progressive',
      type: DataTypes.INTEGER,
    },
    Validity: {
      allowNull: true,
      field: 'Validity',
      type: DataTypes.INTEGER,
    },
    TimeMin: {
      allowNull: true,
      field: 'TimeMin',
      type: DataTypes.INTEGER,
    },
    TimeMax: {
      allowNull: true,
      field: 'TimeMax',
      type: DataTypes.INTEGER,
    },
    SpeedMin: {
      allowNull: true,
      field: 'SpeedMin',
      type: DataTypes.INTEGER,
    },
    SpeedMax: {
      allowNull: true,
      field: 'SpeedMax',
      type: DataTypes.INTEGER,
    },
    TimeTable: {
      allowNull: true,
      field: 'TimeTable',
      type: DataTypes.STRING(80),
    },
    AliasPost: {
      allowNull: true,
      field: 'AliasPost',
      type: DataTypes.INTEGER,
    },
    IOName: {
      allowNull: true,
      field: 'IOName',
      type: DataTypes.INTEGER,
    },
    HitMin: {
      allowNull: true,
      field: 'HitMin',
      type: DataTypes.INTEGER,
    },
    MinSignal: {
      allowNull: true,
      field: 'MinSignal',
      type: DataTypes.INTEGER,
    },
    TimeTCGap: {
      allowNull: true,
      field: 'TimeTCGap',
      type: DataTypes.INTEGER,
    },
    TimeMaxWait: {
      allowNull: true,
      field: 'TimeMaxWait',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
