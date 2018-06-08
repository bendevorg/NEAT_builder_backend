const uuidv4 = require('uuid/v4');
const games = [
  {
    id: uuidv4(),
    name: 'Runner',
    goal: 1000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: uuidv4(),
    name: 'Snake',
    goal: 1000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: uuidv4(),
    name: 'Flappy',
    goal: 1000,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const instructions = [
  {
    id: uuidv4(),
    name: 'Player',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[0].id
  },
  {
    id: uuidv4(),
    name: 'Blocks',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[0].id
  },
  {
    id: uuidv4(),
    name: 'Game',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[0].id
  },
  {
    id: uuidv4(),
    name: 'Objective',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[0].id
  },
  {
    id: uuidv4(),
    name: 'Player',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[1].id
  },
  {
    id: uuidv4(),
    name: 'Food',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[1].id
  },
  {
    id: uuidv4(),
    name: 'Game',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[1].id
  },
  {
    id: uuidv4(),
    name: 'Objective',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[1].id
  },
  {
    id: uuidv4(),
    name: 'Player',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[2].id
  },
  {
    id: uuidv4(),
    name: 'Pipes',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[2].id
  },
  {
    id: uuidv4(),
    name: 'Game',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[2].id
  },
  {
    id: uuidv4(),
    name: 'Objective',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[2].id
  }
];

const instructionItems = [
  {
    id: uuidv4(),
    name: 'player.x',
    description: 'Player X position defined between 0 and the game.width',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[0].id
  },
  {
    id: uuidv4(),
    name: 'player.y',
    description: 'Player Y position defined between 0 and the game.height',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[0].id
  },
  {
    id: uuidv4(),
    name: 'player.width',
    description: 'Player width size',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[0].id
  },
  {
    id: uuidv4(),
    name: 'player.height',
    description: 'Player height size',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[0].id
  },
  {
    id: uuidv4(),
    name: 'player.velocity',
    description: 'Player velocity (velocity in the Y position is -13 and Max 13)',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[0].id
  },
  {
    id: uuidv4(),
    name: 'player.maxVelocity',
    description: 'Player maximum velocity in Y axis (13)',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[0].id
  },
  {
    id: uuidv4(),
    name: 'player.minVelocity',
    description: 'Player minimum velocity in Y axis (-13)',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[0].id
  },
  {
    id: uuidv4(),
    name: 'blocks.closest.x',
    description: 'X of the closest block',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[1].id
  },
  {
    id: uuidv4(),
    name: 'blocks.closest.x',
    description: 'Y of the closest block',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[1].id
  },
  {
    id: uuidv4(),
    name: 'blocks.closest.width',
    description: 'width of the closest block',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[1].id
  },
  {
    id: uuidv4(),
    name: 'blocks.closest.height',
    description: 'height of the closest block',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[1].id
  },
  {
    id: uuidv4(),
    name: 'blocks.closest.velocity',
    description: 'velocity of the closest block (fixed at 6)',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[1].id
  },
  {
    id: uuidv4(),
    name: 'game.width',
    description: 'width size of game canvas',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[2].id
  },
  {
    id: uuidv4(),
    name: 'game.height',
    description: 'height size of game canvas',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[2].id
  },
  {
    id: uuidv4(),
    name: 'goal',
    description: 'reach the highest score within 1000 steps',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[3].id
  },
  {
    id: uuidv4(),
    name: 'player.head.x',
    description: 'X position of the player head',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[4].id
  },
  {
    id: uuidv4(),
    name: 'player.head.y',
    description: 'Y position of the player head',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[4].id
  },
  {
    id: uuidv4(),
    name: 'player.direction',
    description: 'Direction where the player is heading',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[4].id
  },
  {
    id: uuidv4(),
    name: 'player.hunger',
    description: 'Player hunger',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[4].id
  },
  {
    id: uuidv4(),
    name: 'player.maxHunger',
    description: 'Player maximum hunger before dying',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[4].id
  },
  {
    id: uuidv4(),
    name: 'food.x',
    description: 'X position of the food',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[5].id
  },
  {
    id: uuidv4(),
    name: 'food.y',
    description: 'Y position of the food',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[5].id
  },
  {
    id: uuidv4(),
    name: 'game.width',
    description: 'width size of game canvas',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[6].id
  },
  {
    id: uuidv4(),
    name: 'game.height',
    description: 'height size of game canvas',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[6].id
  },
  {
    id: uuidv4(),
    name: 'goal',
    description: 'reach the highest score within 1000 steps',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[7].id
  },
  {
    id: uuidv4(),
    name: 'player.x',
    description: 'player X position defined between 0 and the game.width',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[8].id
  },
  {
    id: uuidv4(),
    name: 'player.y',
    description: 'player Y position defined between 0 and the game.height',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[8].id
  },
  {
    id: uuidv4(),
    name: 'player.radius',
    description: 'player radius size',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[8].id
  },
  {
    id: uuidv4(),
    name: 'player.velocity',
    description: 'player velocity (velocity in the Y position is -5 and Max 5)',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[8].id
  },
  {
    id: uuidv4(),
    name: 'player.maxVelocity',
    description: 'player maximum velocity in Y axis (5)',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[8].id
  },
  {
    id: uuidv4(),
    name: 'player.minVelocity',
    description: 'player minimum velocity in Y axis (-5)',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[8].id
  },
  {
    id: uuidv4(),
    name: 'pipes.closest.x',
    description: 'X of the closest pipe',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[9].id
  },
  {
    id: uuidv4(),
    name: 'pipes.closest.bottom',
    description: 'closest pipe bottom entrance',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[9].id
  },
  {
    id: uuidv4(),
    name: 'blocks.closest.top',
    description: 'closest pipe top entrance',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[9].id
  },
  {
    id: uuidv4(),
    name: 'pipes.closest.width',
    description: 'width of the closest pipe',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[9].id
  },
  {
    id: uuidv4(),
    name: 'pipes.closest.velocity',
    description: 'velocity of the closest pipe (fixed at 6)',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[9].id
  },
  {
    id: uuidv4(),
    name: 'game.width',
    description: 'width size of game canvas',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[10].id
  },
  {
    id: uuidv4(),
    name: 'game.height',
    description: 'height size of game canvas',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[10].id
  },
  {
    id: uuidv4(),
    name: 'goal',
    description: 'reach the highest score within 1000 steps',
    createdAt: new Date(),
    updatedAt: new Date(),
    instructionId: instructions[11].id
  }
];

const parameters = [
  {
    id: uuidv4(),
    name: 'player',
    value: 'params[0]',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[0].id
  },
  {
    id: uuidv4(),
    name: 'blocks.closest',
    value: 'params[1]',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[0].id
  },
  {
    id: uuidv4(),
    name: 'game',
    value: 'params[3]',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[0].id
  },
  {
    id: uuidv4(),
    name: 'player.head',
    value: 'params[0]',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[1].id
  },
  {
    id: uuidv4(),
    name: 'player',
    value: 'params[1]',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[1].id
  },
  {
    id: uuidv4(),
    name: 'food',
    value: 'params[2]',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[1].id
  },
  {
    id: uuidv4(),
    name: 'game',
    value: 'params[3]',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[1].id
  },
  {
    id: uuidv4(),
    name: 'player',
    value: 'params[0]',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[2].id
  },
  {
    id: uuidv4(),
    name: 'pipes.closest',
    value: 'params[1]',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[2].id
  },
  {
    id: uuidv4(),
    name: 'game',
    value: 'params[3]',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameId: games[2].id
  }
];

module.exports = { games, instructions, instructionItems, parameters };
