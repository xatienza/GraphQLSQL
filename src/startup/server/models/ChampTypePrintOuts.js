module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ChampTypePrintouts', {
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
    TypePrintouts: {
      allowNull: false,
      field: 'TypePrintouts',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    PrintSet: {
      allowNull: false,
      field: 'PrintSet',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    DocumentCode: {
      allowNull: false,
      field: 'DocumentCode',
      type: DataTypes.STRING(10),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
