module.exports = function (sequelize, DataTypes) {
  return sequelize.define('PostDevices', {
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
    DeviceId: {
      allowNull: false,
      field: 'DeviceId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Rilev: {
      allowNull: false,
      field: 'Rilev',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Priority: {
      allowNull: true,
      field: 'Priority',
      type: DataTypes.INTEGER,
    },
    IOName: {
      allowNull: true,
      field: 'IOName',
      type: DataTypes.INTEGER,
    },
    Distance: {
      allowNull: true,
      field: 'Distance',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
