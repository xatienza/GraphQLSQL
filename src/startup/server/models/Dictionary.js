module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Dictionary', {
    VocZone: {
      allowNull: false,
      field: 'VocZone',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    VocCode: {
      allowNull: false,
      field: 'VocCode',
      primaryKey: true,
      type: DataTypes.INTEGER,
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
    VocDeu: {
      allowNull: true,
      field: 'VocDeu',
      type: DataTypes.STRING(255),
    },
    VocLoc: {
      allowNull: true,
      field: 'VocLoc',
      type: DataTypes.STRING(255),
    },
    VocSubCode: {
      allowNull: false,
      field: 'VocSubCode',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    VocType: {
      allowNull: true,
      field: 'VocType',
      type: DataTypes.STRING(3),
    },
    VocFlags: {
      allowNull: true,
      field: 'VocType',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
