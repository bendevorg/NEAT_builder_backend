const uuidv4 = require('uuid/v4');

module.exports = instructionId => {
  return [
    {
      id: uuidv4(),
      name: 'goal',
      description: 'reach the highest score within 4000 steps',
      createdAt: new Date(),
      updatedAt: new Date(),
      instructionId: instructionId
    }
  ];
};
