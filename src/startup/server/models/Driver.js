module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Driver', {
    DriverId: {
      allowNull: false,
      field: 'DriverId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Name: {
      allowNull: true,
      field: 'Name',
      type: DataTypes.STRING(20),
    },
    SurName: {
      allowNull: true,
      field: 'SurName',
      type: DataTypes.STRING(20),
    },
    Nation: {
      allowNull: true,
      field: 'Nation',
      type: DataTypes.STRING(3),
    },
    Region: {
      allowNull: true,
      field: 'Region',
      type: DataTypes.STRING(5),
    },
    DateOfBirth: {
      allowNull: true,
      field: 'DateOfBirth',
      type: DataTypes.STRING(50),
    },
    PlaceOfBirth: {
      allowNull: true,
      field: 'PlaceOfBirth',
      type: DataTypes.STRING(25),
    },
    NationOfBirth: {
      allowNull: true,
      field: 'NationOfBirth',
      type: DataTypes.STRING(3),
    },
    Photo: {
      allowNull: true,
      field: 'Photo',
      type: DataTypes.STRING.BINARY,
    },
    FileName: {
      allowNull: true,
      field: 'FileName',
      type: DataTypes.STRING(80),
    },
    GivenName: {
      allowNull: true,
      field: 'GivenName',
      type: DataTypes.STRING(20),
    },
    ShortestName: {
      allowNull: true,
      field: 'ShortestName',
      type: DataTypes.STRING(15),
    },
    NameAbbrev: {
      allowNull: true,
      field: 'NameAbbrev',
      type: DataTypes.STRING(5),
    },
    Federation: {
      allowNull: true,
      field: 'Federation',
      type: DataTypes.STRING(10),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
