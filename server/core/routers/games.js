const express = require('express');
const router = express.Router();
const retrieveControllers = require('../../utils/retrieveControllers');
const path = require('path');

const controllers = retrieveControllers(path.basename(__filename).split('.')[0]);

//  Games APIs
router.get('/', controllers.retrieveGames);
router.post('/new', controllers.newGame);
router.delete('/:gameId', controllers.deleteGame);

//  Parameters APIs
router.get('/:gameId/parameters', controllers.retrieveParameters);
router.post('/:gameId/parameters/new', controllers.newParameters);
router.delete('/parameters/:parameterId', controllers.deleteParameter);

//  Instructions APIs
router.get('/:gameId/instructions', controllers.retrieveInstructions);
router.post('/:gameId/instructions/new', controllers.newInstruction);
router.delete('/instructions/:instructionId', controllers.deleteInstruction);
router.post('/instructions/:instructionId/items/new', controllers.newInstructionItem);

module.exports = router;
