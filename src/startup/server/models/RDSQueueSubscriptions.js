module.exports = function (sequelize, DataTypes) {
  return sequelize.define('RDSQueueSubscriptions', {
    QItemId: {
      allowNull: false,
      field: 'QItemId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Recipient: {
      allowNull: false,
      field: 'Recipient',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Status: {
      allowNull: true,
      field: 'Status',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
