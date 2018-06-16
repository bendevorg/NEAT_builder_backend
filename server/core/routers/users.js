const express = require('express');
const router = express.Router();
const fs = require('fs');

const controllersPath = process.cwd() + '/server/controllers/users';
let controllers = [];

// Get our routers
fs.readdirSync(controllersPath).forEach(file => {
  if (file.indexOf('.js') !== -1)
    controllers[file.split('.')[0]] = require(controllersPath + '/' + file);
});

//  User API
router.delete('/:userId', controllers.deleteUser);

module.exports = router;
