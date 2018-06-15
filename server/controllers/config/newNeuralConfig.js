const database = require('../../models/database');

module.exports = neuralInput => {
  return new Promise((resolve, reject) => {
    database.neuralConfig
      .build(neuralInput)
      .save()
      .then(neuralInsert => {
        return resolve(neuralInsert);
      })
      .catch(err => {
        return reject(err);
      });
  });
};
