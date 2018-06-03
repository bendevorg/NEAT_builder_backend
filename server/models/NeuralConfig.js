module.exports = (sequelize, DataTypes) => {
  let NeuralConfig = sequelize.define('neuralConfig', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    hiddenLayers: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    learningRate: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });

  NeuralConfig.associate = models => {
    NeuralConfig.belongsTo(models.leaderboard, {
      foreignKey: {
        name: 'leaderboardId',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };

  NeuralConfig.associate = models => {
    NeuralConfig.hasMany(models.neuralInput, {
      foreignKey: 'neuralId'
    });
  };

  return NeuralConfig;
};
