module.exports = function (sequelize, DataTypes) {
  return sequelize.define('EntryEmett', {
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
    EmettId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Progressiv: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    HasOnBoard: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
