module.exports = (sequelize, DataTypes) => {
    let Instructions = sequelize.define('instructions', {
      id: {
        type: DataTypes.UUID, 
        primaryKey: true, 
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true
      }
    });
  
    Instructions.associate = models => {
      Instructions.belongsTo(models.game, {
        foreignKey: 'gameId'
      });
    };

    Instructions.associate = models => {
      Instructions.hasMany(models.instructionItems, {
        foreignKey: 'instructionId',
        as: 'items'
      });
    };
  
    return Instructions;
  };
  