module.exports = function (sequelize, DataTypes) {
  return sequelize.define('BestPartialTime', {
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
    Ordering: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    PosPartialTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    NumberIdT1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TimeT1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    NumberIdT2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TimeT2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    NumberIdT3: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TimeT3: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    NumberIdT4: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TimeT4: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Position: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    NumberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    IdealTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    BestTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    StndPos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
