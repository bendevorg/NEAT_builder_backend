/**
 * Module add to instruction to game
 * @module controllers/game/newInstruction
 */
const database = require('../../models/database');
const logger = require('../../../tools/logger');
const validator = require('../../utils/validator');
const constants = require('../../utils/constants');

/**
 * Add instruction to game
 *
 * @param {string} req.params.gameId - Game ID
 * @param {object} req.body - instruction info
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

  let {name} = req.body;
  if (!validator.isValidString(name))
    return res.status(400).json({
      msg: constants.messages.error.INVALID_NAME
    });

  name = name.trim();

  let newInstruction = database.instructions.build({name, gameId});
  newInstruction.save()
    .then(savedInstruction => {
      return res.status(200).json({
        msg: savedInstruction
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

