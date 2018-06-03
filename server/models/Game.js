module.exports = (sequelize, DataTypes) => {
  let Game = sequelize.define('game', {
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

  Game.associate = models => {
    Game.hasOne(models.leaderboard, {
      foreignKey: 'gameId'
    });
    Game.hasOne(models.instructions, {
      foreignKey: 'gameId'
    });
    Game.hasOne(models.instructions, {
      foreignKey: 'gameId'
    });
  };

  return Game;
};
