module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Analysis', {
    ChampId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    EventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    SessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Ordering: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    NumberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Lap: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    BestLap: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Box: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TimeT1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    BestT1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TimeT2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    BestT2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TimeT3: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    BestT3: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TimeT4: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    BestT4: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    MaxSpeed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    BestSpeed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TXPID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    TXPLabel: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
