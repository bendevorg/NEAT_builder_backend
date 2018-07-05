const express = require('express');
const router = express.Router();
const retrieveControllers = require('../../utils/retrieveControllers');
const path = require('path');

const controllers = retrieveControllers(path.basename(__filename).split('.')[0]);

//  Leaderboard API
router.get('/:gameId', controllers.retrieveLeaderboard);
router.post('/:gameId/new', controllers.newLeaderboardEntry);

module.exports = router;
