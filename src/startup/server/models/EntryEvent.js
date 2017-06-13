module.exports = function (sequelize, DataTypes) {
  return sequelize.define('EntryEvent', {
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
    EventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    ZavorraId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Wildcard: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Replaced: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Replacement: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    TyresId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    TeamId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CarId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    PartialEventReplacement: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
