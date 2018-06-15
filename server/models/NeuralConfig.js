module.exports = (sequelize, DataTypes) => {
  let NeuralConfig = sequelize.define('neuralConfig', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    hiddenLayers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    learningRate: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });

  NeuralConfig.associate = models => {
    NeuralConfig.belongsTo(models.leaderboard, {
      foreignKey: 'leaderboardId',
      onDelete: 'CASCADE'
    });
    NeuralConfig.hasMany(models.neuralInput, {
      foreignKey: 'neuralId',
      onDelete: 'CASCADE'
    });
  };

  return NeuralConfig;
};
