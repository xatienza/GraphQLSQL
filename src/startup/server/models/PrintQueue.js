module.exports = function (sequelize, DataTypes) {
  return sequelize.define('PrintQueue', {
    PrintOutId: {
      allowNull: false,
      field: 'PrintoutId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    ChampId: {
      allowNull: false,
      field: 'ChampId',
      type: DataTypes.INTEGER,
    },
    EventId: {
      allowNull: false,
      field: 'EventId',
      type: DataTypes.INTEGER,
    },
    TypePrintOuts: {
      allowNull: false,
      field: 'TypePrintouts',
      type: DataTypes.INTEGER,
    },
    PrintSetId: {
      allowNull: false,
      field: 'PrintSetId',
      type: DataTypes.INTEGER,
    },
    Comment: {
      allowNull: true,
      field: 'Comment',
      type: DataTypes.STRING(255),
    },
    Status: {
      allowNull: false,
      field: 'Status',
      type: DataTypes.INTEGER,      
    },
    HourPrintOuts: {
      allowNull: true,
      field: 'HourPrintouts',
      type: DataTypes.STRING(30),
    },
    Penalty: {
      allowNull: true,
      field: 'Penalty',
      type: DataTypes.STRING(255),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
