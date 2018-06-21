const database = require('../../models/database');

module.exports = neuralInputs => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < neuralInputs.inputs.length; i++) {
      neuralInputs.inputs[i] = {
        input: neuralInputs.inputs[i],
        neuralId: neuralInputs.neuralId
      };
    }
    console.log(neuralInputs.inputs);
    database.neuralInput
      .bulkCreate(neuralInputs.inputs, { individualHooks: true })
      .then(neuralInsert => {
        return resolve(neuralInsert);
      })
      .catch(err => {
        return reject(err);
      });
  });
};
