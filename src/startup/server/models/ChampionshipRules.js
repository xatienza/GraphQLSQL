module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Championshiprules', {
    ChampId: {
      allowNull: false,
      field: 'ChampId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    RaceKind: {
      allowNull: true,
      field: 'RaceKind',
      type: DataTypes.INTEGER,
    },
    GridId: {
      allowNull: true,
      field: 'GridId',
      type: DataTypes.INTEGER,
    },
    ChampCarKind: {
      allowNull: true,
      field: 'ChampCarKind',
      type: DataTypes.INTEGER,
    },
    ChampDriverKind: {
      allowNull: true,
      field: 'ChampDriverKind',
      type: DataTypes.INTEGER,
    },
    ChampTeamKind: {
      allowNull: true,
      field: 'ChampTeamKind',
      type: DataTypes.INTEGER,
    },
    PercTime: {
      allowNull: true,
      field: 'PercTime',
      type: DataTypes.INTEGER,
    },
    PercLap: {
      allowNull: true,
      field: 'PercLap',
      type: DataTypes.INTEGER,
    },
    Flag: {
      allowNull: true,
      field: 'Flag',
      type: DataTypes.INTEGER,
    },
    TimeRound: {
      allowNull: true,
      field: 'TimeRound',
      type: DataTypes.INTEGER,
    },
    LapsRound: {
      allowNull: true,
      field: 'LapsRound',
      type: DataTypes.INTEGER,
    },
    DriverCategory: {
      allowNull: true,
      field: 'DriverCategory',
      type: DataTypes.INTEGER,
    },
    CarCategory: {
      allowNull: true,
      field: 'CarCategory',
      type: DataTypes.INTEGER,
    },
    ValNumRace: {
      allowNull: true,
      field: 'ValNumRace',
      type: DataTypes.INTEGER,
    },
    TotNumRace: {
      allowNull: true,
      field: 'TotNumRace',
      type: DataTypes.INTEGER,
    },
    PercLapTot: {
      allowNull: true,
      field: 'PercLapTot',
      type: DataTypes.INTEGER,
    },
    PercLapHalf: {
      allowNull: true,
      field: 'PercLapHalf',
      type: DataTypes.INTEGER,
    },
    MaxTeamCar: {
      allowNull: true,
      field: 'MaxTeamCar',
      type: DataTypes.INTEGER,
    },
    GroupId: {
      allowNull: true,
      field: 'GroupId',
      type: DataTypes.INTEGER,
    },
    QualifyingMode: {
      allowNull: false,
      field: 'QualifyingMode',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
