const uuidv4 = require('uuid/v4');

module.exports = instructionId => {
  return [
    {
      id: uuidv4(),
      name: 'player.head.x',
      description: 'X position of the player head',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'player.head.y',
      description: 'Y position of the player head',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'player.direction',
      description: 'Direction where the player is heading',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'player.hunger',
      description: 'Player hunger',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'player.maxHunger',
      description: 'Player maximum hunger before dying',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    }
  ];
};
