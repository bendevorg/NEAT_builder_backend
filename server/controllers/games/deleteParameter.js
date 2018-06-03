/**
 * Module to delete a parameter
 * @module controllers/games/deleteParameter
 */
const database = require('../../models/database');
const logger = require('../../../tools/logger');
const validator = require('../../utils/validator');
const constants = require('../../utils/constants');

/**
 * Delete a parameter
 *
 * @param {object} req.params.parameterId - Parameter id
 * @return {string} - Returns a confirmation message
 * @throws {object} - Returns a msg that indicates a failure
 *
 */
module.exports = (req, res) => {
  const { parameterId } = req.params;
  if (!validator.isValidUuid(parameterId)) {
    return res.status(400).json({
      msg: constants.messages.error.INVALID_PARAMETER_ID
    });
  }

  return database.parameters
    .findById(parameterId)
    .then(parameter => {
      return parameter
        .destroy()
        .then(() => {
          return res.status(200).json({
            msg: constants.messages.info.PARAMETER_DELETED
          });
        })
        .catch(err => {
          logger.error(err);
          return res.status(500).json({
            msg: constants.messages.error.UNEXPECTED_DB
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
