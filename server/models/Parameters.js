module.exports = (sequelize, DataTypes) => {
    let Parameters = sequelize.define('parameters', {
      id: {
        type: DataTypes.UUID, 
        primaryKey: true, 
        defaultValue: DataTypes.UUIDV4
      },
      goal: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    Instructions.associate = models => {
        Instructions.belongsTo(models.game, {
          foreignKey: 'gameId'
        });
      };
  
    return Game;
  };
  