/**
 * Module to delete an instruction
 * @module controllers/games/deleteInstruction
 */
const database = require('../../models/database');
const logger = require('../../../tools/logger');
const validator = require('../../utils/validator');
const constants = require('../../utils/constants');

/**
 * Delete an instruction
 *
 * @param {object} req.params.instructionId - Instruction id
 * @return {string} - Returns a confirmation message
 * @throws {object} - Returns a msg that indicates a failure
 *
 */
module.exports = (req, res) => {
  const { instructionId } = req.params;
  if (!validator.isValidUuid(instructionId)) {
    return res.status(400).json({
      msg: constants.messages.error.INVALID_INSTRUCTION_ID
    });
  }

  return database.instructions
    .findById(instructionId)
    .then(instruction => {
      return instruction
        .destroy()
        .then(() => {
          return res.status(200).json({
            msg: constants.messages.info.INSTRUCTION_DELETED
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
        msg: constants.messages.error.UNEXPECTED_DB
      });
    });
};
