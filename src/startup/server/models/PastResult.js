module.exports = function (sequelize, DataTypes) {
  return sequelize.define('PastResult', {
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
    TypePast: {
      allowNull: false,
      field: 'TypePast',
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
    Pos: {
      allowNull: false,
      field: 'Pos',
      type: DataTypes.INTEGER,
    },
    TimeT: {
      allowNull: false,
      field: 'TimeT',
      type: DataTypes.INTEGER,
    },
    Speed: {
      allowNull: false,
      field: 'Speed',
      type: DataTypes.INTEGER,
    },
    Laps: {
      allowNull: false,
      field: 'Laps',
      type: DataTypes.INTEGER,
    },
    Length: {
      allowNull: false,
      field: 'Length',
      type: DataTypes.INTEGER,
    },
    Info: {
      allowNull: true,
      field: 'Info',
      type: DataTypes.STRING(250),
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
