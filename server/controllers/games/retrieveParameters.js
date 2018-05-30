/**
 * Module to retrive game instructions
 * @module controllers/game/retrieveParameters
 */
const logger = require('../../../tools/logger');
const database = require('../../models/database');
const validator = require('../../utils/validator');
const constants = require('../../utils/constants');

/**
 * Retrieve game instructions
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
    {
      attributes:['goal'],
      order: [
        ['createdAt']
      ],
      where: {
        gameId: gameId
      }
    })
    .then(instructions => {
      if (!instructions)
        return res.status(400).json({
          msg: constants.messages.error.INVALID_GAME_ID
        });
      return res.status(200).json({msg: instructions});
    }) 
    .catch(database.sequelize.Sequelize.DatabaseError, err => {
      return res.status(400).json({msg: constants.messages.error.INVALID_GAME_ID});
    })
    .catch(err => {
      return res.status(500).json({msg: constants.messages.error.UNEXPECTED_DB});
    });

};