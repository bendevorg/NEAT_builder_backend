module.exports = (sequelize, DataTypes) => {
  let Leaderboard = sequelize.define('leaderboard', {
    id: {
      type: DataTypes.UUID, 
      primaryKey: true, 
      defaultValue: DataTypes.UUIDV4
    }
  });

  Leaderboard.associate = models => {
    Leaderboard.belongsTo(models.game, {
      foreignKey: 'gameId'
    });
    Leaderboard.hasMany(models.record, {
      foreignKey: 'leaderboardId'
    });
  };

  return Leaderboard;
};
