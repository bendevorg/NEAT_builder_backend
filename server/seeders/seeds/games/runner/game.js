const uuidv4 = require('uuid/v4');

module.exports = {
  id: uuidv4(),
  name: 'Runner',
  goal: 1000,
  actions: 2,
  tier: 1,
  createdAt: new Date(),
  updatedAt: new Date()
};
