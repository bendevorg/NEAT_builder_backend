'use strict';
/* eslint-disable no-console */
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const router = require('../server/core/router.js');
const morgan = require('morgan');
const cors = require('cors');
const logger = require('./logger');
const app = express();

const database = require('../server/models/database');

app.use(cors());
app.use('/api', router);
app.use(logger.errorHandler());
app.use(morgan('tiny'));

module.exports = app;