/**
 * Module to add a game
 * @module controllers/games/newGame
 */
const database = require('../../models/database');
const logger = require('../../../tools/logger');
const validator = require('../../utils/validator');
const constants = require('../../utils/constants');

/**
 * Add a new game
 *
 * @param {object} req.body - game info
 * @return {string} - Returns a confirmation message
 * @throws {object} - Returns a msg that indicates a failure
 *
 */
module.exports = (req, res) => {
  let { name, goal, actions, tier } = req.body;
  if (!validator.isValidString(name)) {
    return res.status(400).json({
      msg: constants.messages.error.INVALID_NAME
    });
  }
  if (!validator.isValidInteger(goal)) {
    return res.status(400).json({
      msg: constants.messages.error.INVALID_GOAL
    });
  }
  if (!validator.isValidInteger(actions)) {
    return res.status(400).json({
      msg: constants.messages.error.INVALID_ACTIONS
    });
  }
  if (!validator.isValidInteger(tier)) {
    return res.status(400).json({
      msg: constants.messages.error.INVALID_TIER
    });
  }

  name = name.trim();

  let newGame = database.game.build({ name, goal, actions, tier });
  newGame
    .save()
    .then(savedGame => {
      return res.status(201).json({
        msg: savedGame
      });
    })
    .catch(err => {
      logger.error(err);
      return res.status(500).json({
        msg: err
      });
    });
};
