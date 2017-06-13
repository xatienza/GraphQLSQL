module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Event', {
    Season: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
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
    Sequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    DateOfStart: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    DateOfEnd: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Situation: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TrackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TvName: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    SponsoredName: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    SponsoredNameCaps: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
