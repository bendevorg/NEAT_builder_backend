/**
 * Module to retrive game leaderboard
 * @module controllers/games/retriveGame
 */
const logger = require('../../../tools/logger');
const database = require('../../models/database');
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
  database.game
    .findAll({
      attributes: ['id', 'name', 'goal', 'actions', 'tier']
    })
    .then(games => {
      return res.status(200).json({
        msg: games
      });
    })
    .catch(err => {
      logger.error(err);
      return res.status(500).json({
        msg: constants.messages.error.UNEXPECTED_DB
      });
    });
};
