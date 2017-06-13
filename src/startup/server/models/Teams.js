module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Teams', {
    TeamId: {
      allowNull: false,
      field: 'TeamId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Name: {
      allowNull: false,
      field: 'Name',
      type: DataTypes.STRING(60),
    },
    SponsoredName: {
      allowNull: true,
      field: 'SponsoredName',
      type: DataTypes.STRING(60),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
