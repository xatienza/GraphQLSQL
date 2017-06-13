module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Championship', {
    ChampId: {
      allowNull: false,
      field: 'ChampId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Name: {
      allowNull: true,
      field: 'Name',
      type: DataTypes.STRING(80),
    },
    ShortName: {
      allowNull: true,
      field: 'Name',
      type: DataTypes.STRING(15),
    },
    HtmlOrder: {
      allowNull: true,
      field: 'HtmlOrder',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
