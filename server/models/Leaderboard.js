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
      foreignKey: 'gameId'
    });
  };
  return Leaderboard;
};
