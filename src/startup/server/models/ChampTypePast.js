module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ChampTypePast', {
    ChampId: {
      allowNull: false,
      field: 'ChampId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    KindSession: {
      allowNull: false,
      field: 'KindSession',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Progressive: {
      allowNull: false,
      field: 'Progressive',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    TypePast: {
      allowNull: false,
      field: 'TypePast',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
