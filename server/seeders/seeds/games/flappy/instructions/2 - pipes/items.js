const uuidv4 = require('uuid/v4');

module.exports = instructionId => {
  return [
    {
      id: uuidv4(),
      name: 'pipes.closest.x',
      description: 'X of the closest pipe',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'pipes.closest.bottom',
      description: 'closest pipe bottom entrance',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'blocks.closest.top',
      description: 'closest pipe top entrance',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'pipes.closest.width',
      description: 'width of the closest pipe',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    },
    {
      id: uuidv4(),
      name: 'pipes.closest.velocity',
      description: 'velocity of the closest pipe (fixed at 6)',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    }
  ];
};
