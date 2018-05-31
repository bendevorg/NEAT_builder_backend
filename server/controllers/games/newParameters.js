/**
 * Module add to parameter to game
 * @module controllers/game/newParameter
 */
const database = require('../../models/database');
const logger = require('../../../tools/logger');
const validator = require('../../utils/validator');
const constants = require('../../utils/constants');

/**
 * Add parameter to game
 *
 * @param {string} req.params.gameId - Game ID
 * @param {object} req.body - parameter info
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

  let {goal} = req.body;
  if (!validator.isValidString(goal))
    return res.status(400).json({
      msg: constants.messages.error.INVALID_NAME
    });

  goal = goal.trim();

  let newParameter = database.parameters.build({goal, gameId});
  newParameter.save()
    .then(savedParameter => {
      return res.status(200).json({
        msg: savedParameter
      });
    })
    .catch(database.sequelize.Sequelize.DatabaseError, err => {
      return res.status(400).json({msg: constants.messages.error.INVALID_GAME_ID});
    })
    .catch(err => {
      return res.status(500).json({
        msg: err
      });
    });
    

};

