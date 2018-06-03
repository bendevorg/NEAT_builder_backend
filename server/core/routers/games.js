const express = require('express');
const router = express.Router();
const fs = require('fs');

const controllersPath = process.cwd() + '/server/controllers/games';
let controllers = [];

// Get our routers
fs.readdirSync(controllersPath).forEach(file => {
  if (file.indexOf('.js') !== -1)
    controllers[file.split('.')[0]] = require(controllersPath + '/' + file);
});

//  Games APIs
router.get('/', controllers.retrieveGames);
router.post('/new', controllers.newGame);
router.delete('/:gameId', controllers.deleteGame);

//  Parameters APIs
router.get('/:gameId/parameters', controllers.retrieveParameters);
router.post('/:gameId/parameters/new', controllers.newParameters);

//  Instructions APIs
router.get('/:gameId/instructions', controllers.retrieveInstructions);
router.post('/:gameId/instructions/new', controllers.newInstruction);
router.post('/instructions/:instructionId/items/new', controllers.newInstructionItem);

module.exports = router;
