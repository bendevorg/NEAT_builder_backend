/**
 * Module to retrive game leaderboard
 * @module controllers/leadeboard/retrieveLeaderboard
 */
const logger = require('../../../tools/logger');
const database = require('../../models/database');
const validator = require('../../utils/validator');
const constants = require('../../utils/constants');

/**
 * Retrieve a leaderboard
 * Get a leaderboard based on a gameid
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
  database.game.findById(gameId, 
    {
      include: [
        {
          model: database.leaderboard,
          attributes: ['name', 'score', 'time']
        }
      ]
    })
    .then(game => {
      if (!game)
        return res.status(400).json({
          msg: constants.messages.error.INVALID_GAME_ID
        });
      return res.status(200).json({msg: game.leaderboard});
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({msg: err});
    });

};