module.exports = (sequelize, DataTypes) => {
  let NeuralInput = sequelize.define('neuralInput', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    hiddenLayers: {
      type: DataTypes.TEXT,
      allowNull: false,
      notEmpty: true
    }
  });

  NeuralInput.associate = models => {
    NeuralInput.belongsTo(models.neuralConfig, {
      foreignKey: {
        name: 'neuralId',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };

  return NeuralInput;
};
