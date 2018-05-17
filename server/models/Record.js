module.exports = (sequelize, DataTypes) => {
  let Record = sequelize.define('record', {
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

  Record.associate = models => {
    Record.belongsTo(models.leaderboard, {
      foreignKey: 'leaderboardId'
    });
  };

  return Record;
};
