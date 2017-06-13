module.exports = function (sequelize, DataTypes) {
  return sequelize.define('GivenPoints', {
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
    TypeStanding: {
      allowNull: false,
      field: 'TypeStanding',
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
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Sequence: {
      allowNull: false,
      field: 'Sequence',
      type: DataTypes.INTEGER,
    },
    Rank: {
      allowNull: false,
      field: 'Rank',
      type: DataTypes.INTEGER,
    },
    Points: {
      allowNull: false,
      field: 'Points',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
