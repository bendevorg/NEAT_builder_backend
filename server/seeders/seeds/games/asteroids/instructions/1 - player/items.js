const uuidv4 = require('uuid/v4');

module.exports = instructionId => {
  return [
    {
      id: uuidv4(),
      name: 'player.x',
      description: 'Player X position defined between 0 and the game.width',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'player.y',
      description: 'Player Y position defined between 0 and the game.height',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'player.width',
      description: 'Player width size',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'player.height',
      description: 'Player height size',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'player.velocity',
      description: 'Player velocity (velocity in the Y position is -13 and Max 13)',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'player.maxVelocity',
      description: 'Player maximum velocity in Y axis (13)',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'player.minVelocity',
      description: 'Player minimum velocity in Y axis (-13)',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    }
  ];
};
