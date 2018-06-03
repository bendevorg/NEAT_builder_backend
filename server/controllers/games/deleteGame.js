/**
 * Module to delete a game
 * @module controllers/games/deleteGame
 */
const database = require('../../models/database');
const logger = require('../../../tools/logger');
const validator = require('../../utils/validator');
const constants = require('../../utils/constants');

/**
 * Delete a game
 *
 * @param {object} req.params.gameId - Game id
 * @return {string} - Returns a confirmation message
 * @throws {object} - Returns a msg that indicates a failure
 *
 */
module.exports = (req, res) => {
  const { gameId } = req.params;
  if (!validator.isValidUuid(gameId)) {
    return res.status(400).json({
      msg: constants.messages.error.INVALID_GAME_ID
    });
  }

  return database.game
    .findById(gameId)
    .then(game => {
      return game
        .destroy()
        .then(() => {
          return res.status(200).json({
            msg: constants.messages.info.GAME_DELETED
          });
        })
        .catch(err => {
          logger.error(err);
          return res.status(500).json({
            msg: err
          });
        });
    })
    .catch(err => {
      logger.error(err);
      return res.status(500).json({
        msg: err
      });
    });
};
