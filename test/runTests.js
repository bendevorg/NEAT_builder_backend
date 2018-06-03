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

//  New leaderboard entry
require('./leaderboard/newLeaderboardEntry');

//  Retrieve leaderboard
require('./leaderboard/retrieveLeaderboard');

//  Delete instruction
require('./instructions/deleteInstruction');

//  Delete games
require('./games/deleteGame');

//  Close connections
require('./utils/closeApp');
