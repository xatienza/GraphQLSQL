module.exports = function (sequelize, DataTypes) {
  return sequelize.define('PreGridConfig', {
    Season: {
      allowNull: false,
      field: 'Season',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
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
    PrepareGridPrevSessionSource: {
      allowNull: false,
      field: 'PrepareGridPrevSessionSource',
      type: DataTypes.INTEGER,
    },
    PrepareGridThisSessionSource: {
      allowNull: false,
      field: 'PrepareGridThisSessionSource',
      type: DataTypes.INTEGER,
    },
    RestoreGridPresentRidersSource: {
      allowNull: false,
      field: 'RestoreGridPresentRidersSource',
      type: DataTypes.INTEGER,
    },
    AddGridNewRiders: {
      allowNull: false,
      field: 'AddGridNewRiders',
      type: DataTypes.INTEGER,
    },
    DeleteGridOutRiders: {
      allowNull: false,
      field: 'DeleteGridOutRiders',
      type: DataTypes.INTEGER,
    },
    PromotePartialReplacements: {
      allowNull: false,
      field: 'PromotePartialReplacements',
      type: DataTypes.INTEGER,
    },
    GridReorderFrom: {
      allowNull: false,
      field: 'GridReorderFrom',
      type: DataTypes.INTEGER,
    },
    GridReorderTo: {
      allowNull: false,
      field: 'GridReorderTo',
      type: DataTypes.INTEGER,
    },
    WriteEntryDestSession: {
      allowNull: false,
      field: 'WriteEntryDestSession',
      type: DataTypes.INTEGER,
    },
    WriteEntryPosFrom: {
      allowNull: false,
      field: 'WriteEntryPosFrom',
      type: DataTypes.INTEGER,
    },
    WriteEntryPosTo: {
      allowNull: false,
      field: 'WriteEntryPosTo',
      type: DataTypes.INTEGER,
    },
    PromotedRidersCount: {
      allowNull: false,
      field: 'PromotedRidersCount',
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
