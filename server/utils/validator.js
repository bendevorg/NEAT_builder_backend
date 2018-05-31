/**
 * Module of validation functions
 * @module controllers/validator
 */

const constants = require('./constants');

/**
 * Validate if the input is a valid not empty string
 *
 * @param {string} stringToValidate - String to be validated
 * @return {boolean} - True case the string is valid and false if it is not
 */
exports.isValidString = stringToValidate => {
  return typeof stringToValidate === 'string' && stringToValidate.trim().length > 0;
};

/**
 * Validate if the input is a valid integer
 *
 * @param {string} integerToValidate - Integer to be validated
 * @return {boolean} - True case the string is valid and false if it is not
 */
exports.isValidInteger = integerToValidate => {
  return (
    constants.regex.integer.test(integerToValidate) &&
    parseInt(integerToValidate) <= Number.MAX_SAFE_INTEGER &&
    parseInt(integerToValidate) >= Number.MIN_SAFE_INTEGER
  );
};
