module.exports = function (sequelize, DataTypes) {
  return sequelize.define('TrackCamera', {
    ChampId: {
      allowNull: false,
      field: 'ChampId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    TrackId: {
      allowNull: false,
      field: 'TrackId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    CameraId: {
      allowNull: false,
      field: 'CameraId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Name: {
      allowNull: false,
      field: 'Name',
      type: DataTypes.STRING(20),
    },
    Intermediate: {
      allowNull: false,
      field: 'Intermediate',
      type: DataTypes.INTEGER,
    },
    TimeLap: {
      allowNull: false,
      field: 'TimeLap',
      type: DataTypes.INTEGER,
    },
    Status: {
      allowNull: false,
      field: 'Status',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
