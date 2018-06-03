module.exports = (sequelize, DataTypes) => {
  let InstructionItems = sequelize.define('instructionItems', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      notEmpty: true
    }
  });

  InstructionItems.associate = models => {
    InstructionItems.belongsTo(models.instructions, {
      foreignKey: 'instructionId',
      onDelete: 'CASCADE'
    });
  };

  return InstructionItems;
};
