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
    },
    goal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    actions: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tier: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Game.associate = models => {
    Game.hasOne(models.leaderboard, {
      foreignKey: 'gameId',
      onDelete: 'CASCADE'
    });
    Game.hasOne(models.instructions, {
      foreignKey: 'gameId',
      onDelete: 'CASCADE'
    });
    Game.hasOne(models.instructions, {
      foreignKey: 'gameId',
      onDelete: 'CASCADE'
    });
  };

  return Game;
};
