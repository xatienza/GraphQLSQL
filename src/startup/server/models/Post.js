module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Post', {
    TrackId: {
      allowNull: false,
      field: 'TrackId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    PostId: {
      allowNull: false,
      field: 'PostId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Name: {
      allowNull: true,
      field: 'Name',
      type: DataTypes.STRING(20),
    },
    ShortName: {
      allowNull: true,
      field: 'ShortName',
      type: DataTypes.STRING(3),
    },
    Distance: {
      allowNull: true,
      field: 'Distance',
      type: DataTypes.INTEGER,
    },
    SpeedBase: {
      allowNull: true,
      field: 'SpeedBase',
      type: DataTypes.INTEGER,
    },
    TimePrecision: {
      allowNull: true,
      field: 'TimePrecision',
      type: DataTypes.INTEGER,
    },
    SpeedPrecision: {
      allowNull: true,
      field: 'SpeedPrecision',
      type: DataTypes.INTEGER,
    },
    SpeedAverage: {
      allowNull: true,
      field: 'SpeedAverage',
      type: DataTypes.INTEGER,
    },
    SpeedMaxWait: {
      allowNull: true,
      field: 'SpeedMaxWait',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
