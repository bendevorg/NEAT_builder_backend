module.exports = (sequelize, DataTypes) => {
  let GeneticConfig = sequelize.define('geneticConfig', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    speciesPerGeneration: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    mutationRate: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });

  GeneticConfig.associate = models => {
    GeneticConfig.belongsTo(models.leaderboard, {
      foreignKey: 'leaderboardId',
      onDelete: 'CASCADE'
    });
  };

  return GeneticConfig;
};
