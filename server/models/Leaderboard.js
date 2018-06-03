module.exports = (sequelize, DataTypes) => {
  let Leaderboard = sequelize.define('leaderboard', {
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
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Leaderboard.associate = models => {
    Leaderboard.belongsTo(models.game, {
      foreignKey: 'gameId',
      onDelete: 'CASCADE'
    });
    Leaderboard.hasOne(models.geneticConfig, {
      foreignKey: 'leaderboardId',
      onDelete: 'CASCADE'
    });
    Leaderboard.hasOne(models.neuralConfig, {
      foreignKey: 'leaderboardId',
      onDelete: 'CASCADE'
    });
  };

  return Leaderboard;
};
