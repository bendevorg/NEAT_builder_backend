/**
 * Module add to instruction to game
 * @module controllers/game/newInstructionItem
 */
const database = require('../../models/database');
const logger = require('../../../tools/logger');
const validator = require('../../utils/validator');
const constants = require('../../utils/constants');

/**
 * Add instruction to game
 *
 * @param {string} req.params.instructionId - Instruction ID
 * @param {object} req.body - instruction info
 * @return {string} - Returns a confirmation message
 * @throws {object} - Returns a msg that indicates a failure
 * 
 */
module.exports = (req, res) => {
  let {instructionId} = req.params;
  if (!validator.isValidString(instructionId))
    return res.status(400).json({
      msg: constants.messages.error.INVALID_INSTRUCTION_ID
    });

  let {name, description} = req.body;
  if (!validator.isValidString(name))
    return res.status(400).json({
      msg: constants.messages.error.INVALID_NAME
    });
    if (!validator.isValidString(description))
    return res.status(400).json({
      msg: constants.messages.error.INVALID_DESCRIPTION
    });

  name = name.trim();
  description = description.trim();

  let newItem = database.instructionItems.build({name, description, instructionId});
  newItem.save()
    .then(savedItem => {
      return res.status(200).json({
        msg: savedItem
      });
    })
    .catch(database.sequelize.Sequelize.DatabaseError, err => {
      return res.status(400).json({msg: constants.messages.error.INVALID_INSTRUCTION_ID});
    })
    .catch(err => {
      return res.status(500).json({
        msg: err
      });
    });
};

