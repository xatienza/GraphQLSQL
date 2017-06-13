module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Devices', {
    DeviceId: {
      allowNull: false,
      field: 'DeviceId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Name: {
      allowNull: true,
      field: 'Name',
      type: DataTypes.STRING(20),
    },
    DeviceDriverId: {
      allowNull: true,
      field: 'DeviceDriverId',
      type: DataTypes.INTEGER,
    },
    NRel: {
      allowNull: true,
      field: 'NRel',
      type: DataTypes.INTEGER,
    },
    TRel: {
      allowNull: true,
      field: 'TRel',
      type: DataTypes.INTEGER,
    },
    SRel: {
      allowNull: true,
      field: 'SRel',
      type: DataTypes.INTEGER,
    },
    NPrec: {
      allowNull: true,
      field: 'NPrec',
      type: DataTypes.INTEGER,
    },
    TPrec: {
      allowNull: true,
      field: 'TPrec',
      type: DataTypes.INTEGER,
    },
    SPrec: {
      allowNull: true,
      field: 'SPrec',
      type: DataTypes.INTEGER,
    },
    Delay: {
      allowNull: true,
      field: 'Delay',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
