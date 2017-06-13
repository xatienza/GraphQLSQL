module.exports = function (sequelize, DataTypes) {
  return sequelize.define('DictionaryHtml', {
    DictionID: {
      allowNull: false,
      field: 'DictionID',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    KeyStr: {
      allowNull: true,
      field: 'KeyStr',
      type: DataTypes.STRING(255),
    },
    VocEng: {
      allowNull: true,
      field: 'VocEng',
      type: DataTypes.STRING(255),
    },
    VocFra: {
      allowNull: true,
      field: 'VocFra',
      type: DataTypes.STRING(255),
    },
    VocIta: {
      allowNull: true,
      field: 'VocIta',
      type: DataTypes.STRING(255),
    },
    VocSpa: {
      allowNull: true,
      field: 'VocSpa',
      type: DataTypes.STRING(255),
    },
    VocGer: {
      allowNull: true,
      field: 'VocGer',
      type: DataTypes.STRING(255),
    },
    VocLoc: {
      allowNull: true,
      field: 'VocLoc',
      type: DataTypes.STRING(255),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
