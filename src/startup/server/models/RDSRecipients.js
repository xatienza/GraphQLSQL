module.exports = function (sequelize, DataTypes) {
  return sequelize.define('RDSRecipients', {
    RecipId: {
      allowNull: false,
      field: 'RecipId',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Email: {
      allowNull: false,
      field: 'Email',
      type: DataTypes.STRING(255),
    },
    Name: {
      allowNull: false,
      field: 'Name',
      type: DataTypes.STRING(255),
    },
    Company: {
      allowNull: false,
      field: 'Company',
      type: DataTypes.STRING(255),
    },
    SMS: {
      allowNull: false,
      field: 'SMS',
      type: DataTypes.STRING(255),
    },
    Fax: {
      allowNull: false,
      field: 'Fax',
      type: DataTypes.STRING(255),
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
