module.exports = (sequelize, DataTypes) => {
  let Parameters = sequelize.define('parameters', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Parameters.associate = models => {
    Parameters.belongsTo(models.game, {
      foreignKey: 'gameId',
      onDelete: 'CASCADE'
    });
  };

  return Parameters;
};
