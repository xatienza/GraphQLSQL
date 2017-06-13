module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Track', {
    TrackId: {
      allowNull: false,
      field: 'TrackId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    TrackDataId: {
      allowNull: false,
      field: 'TrackDataId',
      type: DataTypes.INTEGER,
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
    Lenght: {
      allowNull: true,
      field: 'Lenght',
      type: DataTypes.INTEGER,
    },
    Photo: {
      allowNull: true,
      field: 'Photo',
      type: DataTypes.STRING.BINARY,
    },
    Photo1: {
      allowNull: true,
      field: 'Photo1',
      type: DataTypes.STRING.BINARY,
    },
    Photo2: {
      allowNull: true,
      field: 'Photo2',
      type: DataTypes.STRING.BINARY,
    },
    FirstGrid: {
      allowNull: true,
      field: 'FirstGrid',
      type: DataTypes.INTEGER,
    },
    BoxEntry: {
      allowNull: true,
      field: 'BoxEntry',
      type: DataTypes.INTEGER,
    },
    BoxExit: {
      allowNull: true,
      field: 'BoxExit',
      type: DataTypes.INTEGER,
    },
    Width: {
      allowNull: true,
      field: 'Width',
      type: DataTypes.STRING(255),
    },
    LongestStraight: {
      allowNull: true,
      field: 'LongestStraight',
      type: DataTypes.INTEGER,
    },
    LeftCorners: {
      allowNull: true,
      field: 'LeftCorners',
      type: DataTypes.INTEGER,
    },
    RightCorners: {
      allowNull: true,
      field: 'RightCorners',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
