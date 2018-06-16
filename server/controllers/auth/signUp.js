/**
 * Module to create a new user
 * @module controllers/auth/signUp
 */
const database = require('../../models/database');
const encryptor = require('../../utils/encryptor');
const logger = require('../../../tools/logger');
const validator = require('../../utils/validator');
const constants = require('../../utils/constants');

/**
 * Create a new user
 *
 * @param {object} req.body - New user info
 * @return {string} - Returns a confirmation message
 * @throws {object} - Returns a msg that indicates a failure
 *
 */
module.exports = (req, res) => {
  let { name, email, password } = req.body;
  if (!validator.isValidString(name)) {
    return res.status(400).json({
      msg: constants.messages.error.INVALID_NAME
    });
  }
  if (!validator.isValidEmail(email)) {
    return res.status(400).json({
      msg: constants.messages.error.INVALID_EMAIL
    });
  }
  if (!validator.isValidString(password)) {
    return res.status(400).json({
      msg: constants.messages.error.INVALID_PASSWORD
    });
  }

  name = name.trim();
  email = email.trim();
  password = encryptor(password, constants.values.PASSWORD_ENCRYPT_KEY);

  if (!password) {
    return res.status(500).json({
      msg: constants.messages.error.UNEXPECTED_RUNNING
    });
  }

  let newUser = database.user.build({ name, email, password });
  newUser
    .save()
    .then(createdUser => {
      return res.status(201).json({
        msg: createdUser
      });
    })
    .catch(database.sequelize.UniqueConstraintError, () => {
      return res.status(400).json({
        msg: constants.messages.error.EMAIL_IN_USE
      });
    })
    .catch(err => {
      logger.error(err);
      return res.status(500).json({
        msg: constants.messages.error.UNEXPECTED_DB
      });
    });
};
