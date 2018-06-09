const uuidv4 = require('uuid/v4');

module.exports = instructionId => {
  return [
    {
      id: uuidv4(),
      name: 'game.width',
      description: 'width size of game canvas',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'game.height',
      description: 'height size of game canvas',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    }
  ];
};
