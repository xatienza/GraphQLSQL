module.exports = function (sequelize, DataTypes) {
  return sequelize.define('NewPostCorrespondency', {
    TrackId: {
      allowNull: false,
      field: 'TrackID',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    PostId: {
      allowNull: false,
      field: 'PostID',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    EventId: {
      allowNull: false,
      field: 'EventId',
      type: DataTypes.INTEGER,
    },
    EventShortName: {
      allowNull: true,
      field: 'EventShortName',
      type: DataTypes.STRING(3),
    },
    NewPostId: {
      allowNull: false,
      field: 'NewPostID',
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
      allowNull: false,
      field: 'Distance',
      type: DataTypes.INTEGER,
    },
    SpeedBase: {
      allowNull: false,
      field: 'SpeedBase',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
