module.exports = function (sequelize, DataTypes) {
  return sequelize.define('EntrySession', {
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
    NumberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    R_TyreSurfaceId: {
      allowNull: true,
      field: 'R_TyreSurfaceId',
      type: DataTypes.INTEGER,
    },
    R_TyreCompoundId: {
      allowNull: true,
      field: 'R_TyreCompoundId',
      type: DataTypes.INTEGER,
    },
    R_TyreDiameterId: {
      allowNull: true,
      field: 'R_TyreDiameterId',
      type: DataTypes.INTEGER,
    },
    F_TyreSurfaceId: {
      allowNull: true,
      field: 'F_TyreSurfaceId',
      type: DataTypes.INTEGER,
    },
    F_TyreCompoundId: {
      allowNull: true,
      field: 'F_TyreCompoundId',
      type: DataTypes.INTEGER,
    },
    F_TyreDiameterId: {
      allowNull: true,
      field: 'F_TyreDiameterId',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
