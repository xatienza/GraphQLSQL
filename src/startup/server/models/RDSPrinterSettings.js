module.exports = function (sequelize, DataTypes) {
  return sequelize.define('RDSPrintersSettings', {
    PrintSetId: {
      allowNull: false,
      field: 'PrintSetID',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    AttachmentExtension: {
      allowNull: true,
      field: 'AttachmentExtension',
      type: DataTypes.STRING(50),
    },
    MsgText: {
      allowNull: false,
      field: 'MsgText',
      type: DataTypes.STRING(2048),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
