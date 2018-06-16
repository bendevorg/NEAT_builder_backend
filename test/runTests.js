require('dotenv').config();

//  Create game
require('./games/newGame');

//  Retrieve games
require('./games/retrieveGames');

//  New Parameter
require('./parameters/newParameter');

//  Retrieve Parameters
require('./parameters/retrieveParameters');

//  New instruction
require('./instructions/newInstruction');

//  New instruction item
require('./instructions/newInstructionItem');

//  Retrieve instruction
require('./instructions/retrieveInstructions');

//  New user
require('./auth/signIn');

//  Log in user
require('./auth/signUp');

//  New leaderboard entry
require('./leaderboard/newLeaderboardEntry');

//  Retrieve leaderboard
require('./leaderboard/retrieveLeaderboard');

//  Delete instruction
require('./instructions/deleteInstruction');

//  Delete parameters
require('./parameters/deleteParameter');

//  Delete games
require('./games/deleteGame');

//  Close connections
require('./utils/closeApp');
