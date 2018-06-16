/**
 * Module to generate a token
 * @module utils/generateToken
 */
const jwt = require('jsonwebtoken');

/**
 * Create token
 *
 * @param {string} tokenData - Data to be tokenized
 * @param {string} key - Key to generate token
 * @param {integer} expirationTime - Seconds for token expiration
 * @return {object} - Returns the token
 * @throws {boolean} - Returns false that indicates a fail
 *
 */
module.exports = (tokenData, key, expirationTime) => {
  if (!tokenData || !key || !expirationTime) return false;

  const token = jwt.sign(
    {
      token: tokenData
    },
    key,
    {
      expiresIn: expirationTime
    }
  );
  return token;
};
