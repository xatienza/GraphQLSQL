module.exports = function (sequelize, DataTypes) {
  return sequelize.define('SessionName', {
    SessionId: {
      allowNull: false,
      field: 'SessionId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Name: {
      allowNull: true,
      field: 'Name',
      type: DataTypes.STRING(40),
    },
    OrdPres: {
      allowNull: true,
      field: 'OrdPres',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
