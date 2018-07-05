'use strict';
/* eslint-disable no-console */
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const router = require('../server/core/router.js');
const logger = require('./logger');
const cors = require('cors');
const app = express();

app.use(cors());
app.use('/', router);
app.use(logger.errorHandler());

module.exports = app;
