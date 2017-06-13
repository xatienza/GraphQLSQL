module.exports = function (sequelize, DataTypes) {
  return sequelize.define('SessionPenalties', {
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
    PenaltyTime: {
      allowNull: false,
      field: 'PenaltyTime',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    AttributeId: {
      allowNull: false,
      field: 'AttributeId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    SubAttributeId: {
      allowNull: false,
      field: 'SubAttributeId',
      type: DataTypes.INTEGER,
    },
    TypePenalty: {
      allowNull: false,
      field: 'TypePenalty',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    PenaltyData: {
      allowNull: true,
      field: 'PenaltyData',
      type: DataTypes.INTEGER,
    },
    PenaltyText: {
      allowNull: true,
      field: 'PenaltyText',
      type: DataTypes.STRING(255),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
