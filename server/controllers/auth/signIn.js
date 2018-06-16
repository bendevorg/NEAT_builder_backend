/**
 * Module to log in an user
 * @module controllers/auth/signUp
 */
const database = require('../../models/database');
const encryptor = require('../../utils/encryptor');
const decryptor = require('../../utils/decryptor');
const generateToken = require('../../utils/generateToken');
const logger = require('../../../tools/logger');
const validator = require('../../utils/validator');
const constants = require('../../utils/constants');

/**
 * Log in an user
 *
 * @param {object} req.body - User info
 * @return {string} - Returns a confirmation message
 * @throws {object} - Returns a msg that indicates a failure
 *
 */
module.exports = (req, res) => {
  let { email, password } = req.body;
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

  email = email.trim();

  database.user
    .findOne({ where: { email } })
    .then(user => {
      if (!user) {
        return res.status(400).json({
          msg: constants.messages.error.INVALID_USER
        });
      }

      const decryptedPassword = decryptor(user.password, constants.values.PASSWORD_ENCRYPT_KEY);
      if (!password) {
        return res.status(500).json({
          msg: constants.messages.error.UNEXPECTED_RUNNING
        });
      } else if (password !== decryptedPassword) {
        return res.status(400).json({
          msg: constants.messages.error.INVALID_USER
        });
      }

      const userData = {
        id: user.id,
        name: user.name
      };
      const tokenData = encryptor(userData, constants.values.USER_DATA_ENCRYPT_KEY);
      res.cookie(
        'session',
        generateToken(
          tokenData,
          constants.values.TOKEN_ENCRYPT_KEY,
          constants.values.TOKEN_EXPIRATION_IN_SECONDS
        )
      );

      return res.status(200).json({
        msg: constants.messages.info.USER_LOGGED
      });
    })
    .catch(err => {
      logger.error(err);
      return res.status(500).json({
        msg: constants.messages.error.UNEXPECTED_DB
      });
    });
};
