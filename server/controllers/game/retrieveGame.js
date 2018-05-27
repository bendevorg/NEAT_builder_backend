/**
 * Module to retrive game game
 * @module controllers/game/retrieveGame
 */
const logger = require('../../../tools/logger');
const database = require('../../models/database');
const validator = require('../../utils/validator');
const constants = require('../../utils/constants');

/**
 * Retrieve a game
 * Get a game based on a gameid
 *
 * @param {string} req.params.gameId - Game ID
 * @return {object} - Returns the leaderboard in a json format
 * @throws {object} - Returns a msg that indicates a failure
 * 
 */
module.exports = (req, res) => {
  let {gameId} = req.params;
  if (!validator.isValidString(gameId))
    return res.status(400).json({
      msg: constants.messages.error.INVALID_GAME_ID
    });
    gameId = gameId.trim();

  database.instructions.findAll( 
    {attributes:[
      'name'
    ],include: [{model: database.instructionItems, attributes:['name','description']}],
      where: {
        gameId: gameId
      }
    })
    .then((parameters) => {
      if (!parameters)
        return res.status(400).json({
          msg: constants.messages.error.INVALID_GAME_ID
        });
      return res.status(200).json({msg: parameters
/*         [
          {
            name: 'Bird',
            items: [
              { name: 'bird.x', description: 'Bird X position (Defined between 0 and the game.width)' },
              { name: 'bird.y', description: 'Bird Y position (Defined between 0 and the game.height)' },
              { name: 'bird.radius', description: 'Bird radius size' },
              { name: 'bird.velocity', description: 'Bird velocity (velocity in the Y position is -5 and Max 5)' },
              { name: 'bird.maxVelocity', description: 'Bird maximum velocity (5)' },
              { name: 'bird.minVelocity', description: 'Bird minimum velocity (-5)' },
              { name: 'bird.score', description: 'Actual bird score' },
              { name: 'birds.scoreSum', description: 'All birds sums' }
            ]
          },
          {
            name: 'Pipe',
            items: [
              { name: 'pipes.closest.x', description: 'Closest x pipe' },
              { name: 'pipes.closest.bottom', description: 'Closest pipe bottom entrance' },
              { name: 'pipes.closest.top', description: 'Closes pipe top entrance' },
              { name: 'pipes.closest.width', description: 'Closest pipe width' },
              { name: 'pipes.closest.velocity', description: 'Closest pipe velocity (fixed at 6)' },
            ]
          },
          {
            name: 'Game',
            items: [
              { name: 'game.height', description: 'Height size of game canvas' },
              { name: 'game.width', description: 'Width size of game canvas' }
            ]
          }
        ]*/
      });
    }) 
    .catch(database.sequelize.Sequelize.DatabaseError, err => {
      return res.status(400).json({msg: constants.messages.error.INVALID_GAME_ID});
    })
    .catch(err => {
      return res.status(500).json({msg: constants.messages.error.UNEXPECTED_DB});
      //return console.log(err);
    });

};