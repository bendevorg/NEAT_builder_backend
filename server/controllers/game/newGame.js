/**
 * Module to add a game
 * @module controllers/game/newGame
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

  let {name} = req.body;
  if (!validator.isValidString(name))
    return res.status(400).json({
      msg: constants.messages.error.INVALID_NAME
    });

  name = name.trim();

  let newGame = database.game.build({name});
  newGame.save()
    .then(savedGame => {
      return res.status(200).json({
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
