module.exports = function (sequelize, DataTypes) {
  return sequelize.define('RDSQueue', {
    QItemId: {
      allowNull: false,
      field: 'QItemId',
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
    SessionId: {
      allowNull: false,
      field: 'SessionId',
      type: DataTypes.INTEGER,
    },
    TypePrintOut: {
      allowNull: false,
      field: 'TypePrintout',
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
      allowNull: true,
      field: 'Status',
      type: DataTypes.INTEGER,
    },
    Created: {
      allowNull: true,
      field: 'Created',
      type: DataTypes.DATE,
    },
    LastUpdate: {
      allowNull: true,
      field: 'LastUpdated',
      type: DataTypes.DATE,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
