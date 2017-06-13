module.exports = function (sequelize, DataTypes) {
  return sequelize.define('OutputExclusions', {
    ChampId: {
      allowNull: false,
      field: 'ChampID',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    EventId: {
      allowNull: false,
      field: 'EventID',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    SessionId: {
      allowNull: false,
      field: 'SessionID',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    OutputKind: {
      allowNull: false,
      field: 'OutputKind',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    OutputId: {
      allowNull: false,
      field: 'OutputID',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    NumberId: {
      allowNull: false,
      field: 'NumberID',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
