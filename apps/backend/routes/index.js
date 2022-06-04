const express = require('express');
const companies = require('./companies');

const routes = express();

routes.use('/companies', companies);

module.exports = routes;
