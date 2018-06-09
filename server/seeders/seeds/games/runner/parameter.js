const uuidv4 = require('uuid/v4');

module.exports = gameId => {
  return [
    {
      id: uuidv4(),
      name: 'player',
      value: 'params[0]',
      createdAt: new Date(),
      updatedAt: new Date(),
      gameId: gameId
    },
    {
      id: uuidv4(),
      name: 'blocks.closest',
      value: 'params[1]',
      createdAt: new Date(),
      updatedAt: new Date(),
      gameId: gameId
    },
    {
      id: uuidv4(),
      name: 'game',
      value: 'params[3]',
      createdAt: new Date(),
      updatedAt: new Date(),
      gameId: gameId
    }
  ];
};
