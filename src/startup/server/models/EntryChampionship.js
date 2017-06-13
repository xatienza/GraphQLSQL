module.exports = function (sequelize, DataTypes) {
  return sequelize.define('EntryChampionship', {
    ChampId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    NumberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    SequenceUpDate: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    NumGara: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    DriverId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CarId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    TeamId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ConstructorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    EngineId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Rookie: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    IRTA: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    CompetitorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
