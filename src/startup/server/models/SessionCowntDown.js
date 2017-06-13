module.exports = function (sequelize, DataTypes) {
  return sequelize.define('SessionCowntDown', {
    Season: {
      allowNull: false,
      field: 'Season',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
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
    ProcedureId: {
      allowNull: false,
      field: 'ProcedureId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    TimeOffset: {
      allowNull: true,
      field: 'TimeOffset',
      type: DataTypes.INTEGER,
    },
    ProcedureName: {
      allowNull: true,
      field: 'ProcedureName',
      type: DataTypes.STRING(255),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
