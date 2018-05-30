const express = require('express');
const router = express.Router();
const fs = require('fs');

const controllersPath = process.cwd() + '/server/controllers/game';
let controllers = [];

// Get our routers
fs.readdirSync(controllersPath).forEach(file => {
  if (file.indexOf('.js') !== -1)
    controllers[file.split('.')[0]] = require(controllersPath + '/' + file);
});

//  Placeholder API
router.get('/:gameId/parameters', controllers.retrieveGame);
router.post('/:gameId/instructions/new', controllers.newInstruction);
router.post('/instruction/:instructionId/items/new', controllers.newInstructionItem);

module.exports = router;