module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ChampTypeHTML', {
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
    Situation: {
      allowNull: false,
      field: 'Situation',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    TypeHTML: {
      allowNull: false,
      field: 'TypeHTML',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    HTMLSet: {
      allowNull: false,
      field: 'HTMLSet',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
