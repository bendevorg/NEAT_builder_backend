const uuidv4 = require('uuid/v4');

module.exports = {
  id: uuidv4(),
  name: 'Snake',
  goal: 1000,
  actions: 3,
  createdAt: new Date(),
  updatedAt: new Date()
};
