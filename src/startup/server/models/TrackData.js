module.exports = function (sequelize, DataTypes) {
  return sequelize.define('TrackData', {
    TrackDataId: {
      allowNull: false,
      field: 'TrackDataId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Name: {
      allowNull: true,
      field: 'Name',
      type: DataTypes.STRING(255),
    },
    Place: {
      allowNull: true,
      field: 'Place',
      type: DataTypes.STRING(255),
    },
    Nation: {
      allowNull: true,
      field: 'Nation',
      type: DataTypes.STRING(255),
    },
    TvName: {
      allowNull: true,
      field: 'TvName',
      type: DataTypes.STRING(255),
    },
    Designer: {
      allowNull: true,
      field: 'Designer',
      type: DataTypes.STRING(255),
    },
    Constructed: {
      allowNull: true,
      field: 'Constructed',
      type: DataTypes.STRING(255),
    },
    Modified: {
      allowNull: true,
      field: 'Modified',
      type: DataTypes.STRING(255),
    },
    Promoter: {
      allowNull: true,
      field: 'Promoter',
      type: DataTypes.STRING(255),
    },
    Capacity: {
      allowNull: true,
      field: 'Capacity',
      type: DataTypes.INTEGER,
    },
    TvShortName: {
      allowNull: true,
      field: 'TvShortName',
      type: DataTypes.STRING(50),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
