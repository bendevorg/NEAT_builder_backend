const express = require('express');
const router = express.Router();
const fs = require('fs');

const controllersPath = process.cwd() + '/server/controllers/leaderboard';
let controllers = [];

//  THIS WILL BE REMOVED WHEN I IMPLEMENT DATABASES
global.tempLeaderboard = [];
tempLeaderboard["1"] = [{
  name: 'Gibai',
  score: 8921,
  time: 19920
}];

// Get our routers
fs.readdirSync(controllersPath).forEach(file => {
  if (file.indexOf('.js') !== -1)
    controllers[file.split('.')[0]] = require(controllersPath + '/' + file);
});

//  Placeholder API
router.get('/:gameId', controllers.retrieveLeaderboard);
router.post('/:gameId/new', controllers.newLeaderboardEntry);

module.exports = router;