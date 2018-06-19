/**
 * Module to add user to game leaderboard
 * @module controllers/leadeboard/newLeaderboardEntry
 */
const database = require('../../models/database');
const logger = require('../../../tools/logger');
const validator = require('../../utils/validator');
const constants = require('../../utils/constants');
const newGeneticConfig = require('../config/newGeneticConfig');
const newNeuralConfig = require('../config/newNeuralConfig');

/**
 * Add user to leaderobard
 *
 * @param {string} req.params.gameId - Game ID
 * @param {object} req.body - Leaderboard entry info
 * @return {string} - Returns a confirmation message
 * @throws {object} - Returns a msg that indicates a failure
 *
 */
module.exports = (req, res) => {
  let { gameId } = req.params;
  if (!validator.isValidUuid(gameId)) {
    return res.status(400).json({
      msg: constants.messages.error.INVALID_GAME_ID
    });
  }

  let { name, score, time, userId } = req.body;
  if (!validator.isValidString(name)) {
    return res.status(400).json({
      msg: constants.messages.error.INVALID_NAME
    });
  }
  if (!validator.isValidInteger(score) && parseInt(score) > 0) {
    return res.status(400).json({
      msg: constants.messages.error.INVALID_SCORE
    });
  }
  if (!validator.isValidInteger(time) && parseInt(time) > 0) {
    return res.status(400).json({
      msg: constants.messages.error.INVALID_TIME
    });
  }
  if (!validator.isValidUuid(userId)) {
    return res.status(400).json({
      msg: constants.messages.error.INVALID_USER_ID
    });
  }

  name = name.trim();
  score = parseInt(score);
  time = parseInt(time);

  let newRecord = database.leaderboard.build({ name, score, time, gameId, userId });
  newRecord.save().then(leaderboardInsert => {
    let { speciesPerGeneration, mutationRate, hiddenLayers, learningRate } = req.body;
    let leaderboardId = leaderboardInsert.id;
    // TODO: create validator to float
    if (!speciesPerGeneration || !mutationRate || !hiddenLayers || !learningRate) {
      return res.status(200).json({
        msg: {
          leaderboardInsert
        }
      });
    }

    speciesPerGeneration = parseInt(speciesPerGeneration);
    mutationRate = parseFloat(mutationRate);
    hiddenLayers = parseFloat(hiddenLayers);
    learningRate = parseFloat(learningRate);

    newGeneticConfig({ speciesPerGeneration, mutationRate, leaderboardId }).then(geneticInsert => {
      newNeuralConfig({ hiddenLayers, learningRate, leaderboardId })
        .then(neuralInsert => {
          return res.status(201).json({
            msg: {
              leaderboardInsert,
              geneticInsert,
              neuralInsert
            }
          });
        })
        .catch(err => {
          logger.error(err);
          return res.status(500).json({
            msg: err
          });
        })
        .catch(err => {
          logger.error(err);
          return res.status(500).json({
            msg: err
          });
        });
    });
  });
};
