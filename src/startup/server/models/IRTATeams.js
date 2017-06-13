module.exports = function (sequelize, DataTypes) {
  return sequelize.define('IRTATeams', {
    IRTATeamId: {
      allowNull: false,
      field: 'IRTATeamId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    TeamId: {
      allowNull: false,
      field: 'TeamId',
      type: DataTypes.INTEGER,
    },
    DriverId: {
      allowNull: true,
      field: 'DriverId',
      type: DataTypes.INTEGER,
    },
    IRTATeamName: {
      allowNull: false,
      field: 'IRTATeamName',
      type: DataTypes.STRING(60),
    },
    SponsoredName: {
      allowNull: false,
      field: 'SponsoredName',
      type: DataTypes.STRING(60),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
