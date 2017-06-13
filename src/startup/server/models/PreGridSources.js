module.exports = function (sequelize, DataTypes) {
  return sequelize.define('PreGridSources', {
    Id: {
      allowNull: false,
      field: 'ID',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Name: {
      allowNull: false,
      field: 'Name',
      type: DataTypes.STRING(50),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
