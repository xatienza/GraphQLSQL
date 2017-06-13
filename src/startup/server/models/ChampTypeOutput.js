module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ChampTypeOutput', {
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
    TypeOutput: {
      allowNull: false,
      field: 'TypeOutput',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Sequence: {
      allowNull: false,
      field: 'Sequence',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
