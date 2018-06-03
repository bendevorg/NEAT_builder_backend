require('dotenv').config();

//  Create game
require('./games/newGame');

//  Retrieve games
require('./games/retrieveGames');

//  New instruction
require('./instructions/newInstruction');

//  New instruction item
require('./instructions/newInstructionItem');

//  Retrieve instruction
require('./instructions/retrieveInstructions');

//  Delete instruction
require('./instructions/deleteInstruction');

//  Delete games
require('./games/deleteGame');

//  Close connections
require('./utils/closeApp');
