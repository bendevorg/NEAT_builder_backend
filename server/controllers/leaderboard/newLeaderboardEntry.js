/**
 * Module to add user to game leaderboard
 * @module controllers/leadeboard/newLeaderboardEntry
 */
const logger = require('../../../tools/logger');
const validator = require('../../utils/validator');
const constants = require('../../utils/constants');

/**
 * Add user to leaderobard
 *
 * @param {string} req.params.gameId - Game ID
 * @param {object} req.body - Leaderboard entry info
 * @return {string} - Returns a confirmation message
 * @throws {object} - Returns a msg that indicates a failure
 * 
 */
module.exports = (req, res) => {
  let {gameId} = req.params;
  if (!validator.isValidString(gameId))
    return res.status(400).json({
      msg: constants.messages.error.INVALID_GAME_ID
    });
  if (tempLeaderboard[gameId] == null)
    return res.status(400).json({
      msg: constants.messages.error.INVALID_GAME_ID
    });

  let {name, score, time} = req.body;
  if (!validator.isValidString(name))
    return res.status(400).json({
      msg: constants.messages.error.INVALID_NAME
    });
  if (!validator.isValidInteger(score) && parseInt(score) > 0)
    return res.status(400).json({
      msg: constants.messages.error.INVALID_SCORE
    });
  if (!validator.isValidInteger(time) && parseInt(time) > 0)
    return res.status(400).json({
      msg: constants.messages.error.INVALID_TIME
    });

  name = name.trim();
  score = parseInt(score);
  time = parseInt(time);

  tempLeaderboard[gameId].push({name, score, time});
    
  return res.status(200).json({
    msg: constants.messages.info.LEADERBOARD_ENTRY_SUCCESS
  });
};

