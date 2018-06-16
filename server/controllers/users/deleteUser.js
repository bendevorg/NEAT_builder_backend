/**
 * Module to delete an user
 * @module controllers/users/deleteUser
 */
const database = require('../../models/database');
const logger = require('../../../tools/logger');
const validator = require('../../utils/validator');
const constants = require('../../utils/constants');

/**
 * Delete an User
 *
 * @param {object} req.params.userId - Game id
 * @return {string} - Returns a confirmation message
 * @throws {object} - Returns a msg that indicates a failure
 *
 */
module.exports = (req, res) => {
  const { userId } = req.params;
  if (!validator.isValidUuid(userId)) {
    return res.status(400).json({
      msg: constants.messages.error.INVALID_USER_ID
    });
  }

  return database.user
    .findById(userId)
    .then(user => {
      return user
        .destroy()
        .then(() => {
          return res.status(200).json({
            msg: constants.messages.info.USER_DELETED
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
        msg: err
      });
    });
};
