const uuidv4 = require('uuid/v4');

module.exports = instructionId => {
  return [
    {
      id: uuidv4(),
      name: 'player.x',
      description: 'player X position defined between 0 and the game.width',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'player.y',
      description: 'player Y position defined between 0 and the game.height',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'player.radius',
      description: 'player radius size',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'player.velocity',
      description: 'player velocity (velocity in the Y position is -5 and Max 5)',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'player.maxVelocity',
      description: 'player maximum velocity in Y axis (5)',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'player.minVelocity',
      description: 'player minimum velocity in Y axis (-5)',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    }
  ];
};
