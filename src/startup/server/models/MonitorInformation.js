module.exports = function (sequelize, DataTypes) {
  return sequelize.define('MonitorInformation', {
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
    EventId: {
      allowNull: false,
      field: 'EventId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    SessionId: {
      allowNull: false,
      field: 'SessionId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    InformationTime: {
      allowNull: false,
      field: 'InformationTime',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    DriverId: {
      allowNull: false,
      field: 'DriverId',
      type: DataTypes.INTEGER,
    },
    Information: {
      allowNull: false,
      field: 'Information',
      type: DataTypes.STRING(255),
    },
    Status: {
      allowNull: false,
      field: 'Status',
      type: DataTypes.INTEGER,
    },
    MsgId: {
      allowNull: false,
      field: 'MsgId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    VocType: {
      allowNull: true,
      field: 'VocType',
      type: DataTypes.STRING(2),
    },
    VocCode: {
      allowNull: true,
      field: 'VocCode',
      type: DataTypes.INTEGER,
    },
    VocSubCode: {
      allowNull: true,
      field: 'VocSubCode',
      type: DataTypes.INTEGER,
    },
    VocFlags: {
      allowNull: true,
      field: 'VocFlags',
      type: DataTypes.INTEGER,
    },
    ExtraField1: {
      allowNull: true,
      field: 'ExtraField1',
      type: DataTypes.STRING(20),
    },
    ExtraField2: {
      allowNull: true,
      field: 'ExtraField2',
      type: DataTypes.STRING(20),
    },
    ExtraField3: {
      allowNull: true,
      field: 'ExtraField3',
      type: DataTypes.STRING(20),
    },
    ExtraField4: {
      allowNull: true,
      field: 'ExtraField4',
      type: DataTypes.STRING(20),
    },
    ExtraField5: {
      allowNull: true,
      field: 'ExtraField5',
      type: DataTypes.STRING(20),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
