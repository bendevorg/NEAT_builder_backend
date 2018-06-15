const database = require('../../models/database');

module.exports = geneticAlgorithmInput => {
  return new Promise((resolve, reject) => {
    database.geneticConfig
      .build(geneticAlgorithmInput)
      .save()
      .then(geneticInsert => {
        return resolve(geneticInsert);
      })
      .catch(err => {
        return reject(err);
      });
  });
};
