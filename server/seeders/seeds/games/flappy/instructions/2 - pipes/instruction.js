const uuidv4 = require('uuid/v4');

module.exports = gameId => {
  return ({
    id: uuidv4(),
    name: 'Pipes',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: gameId
  });
};
