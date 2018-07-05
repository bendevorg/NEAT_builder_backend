const uuidv4 = require('uuid/v4');

module.exports = {
  id: uuidv4(),
  name: 'Asteroids',
  goal: 1000,
  actions: 4,
  tier: 2,
  createdAt: new Date(),
  updatedAt: new Date()
};
