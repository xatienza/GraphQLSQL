module.exports = function (sequelize, DataTypes) {
  return sequelize.define('StandingIRTARanking', {
    ChampId: {
      allowNull: false,
      field: 'ChampId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    TeamId: {
      allowNull: false,
      field: 'TeamId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Tipo: {
      allowNull: false,
      field: 'Tipo',
      type: DataTypes.INTEGER,
    },
    Position: {
      allowNull: false,
      field: 'Position',
      type: DataTypes.INTEGER,
    },
    Points: {
      allowNull: true,
      field: 'Points',
      type: DataTypes.INTEGER,
    },
    More: {
      allowNull: true,
      field: 'More',
      type: DataTypes.STRING(255),
    },
    NameTeam: {
      allowNull: false,
      field: 'NameTeam',
      type: DataTypes.STRING(255),
    },
    NameRider: {
      allowNull: false,
      field: 'NameRider',
      type: DataTypes.STRING(255),
    },
    MoreRider: {
      allowNull: true,
      field: 'MoreRider',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
