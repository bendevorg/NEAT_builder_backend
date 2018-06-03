require('dotenv').config();

//  Create game
require('./games/newGame');

//  Retrieve games
require('./games/retrieveGames');

//  Delete games
require('./games/deleteGame');

//  Close connections
require('./utils/closeApp');
