const express = require('express');
const companiesResponse = require('../controllers/companies');

const router = express.Router();

router.get('/', companiesResponse);

module.exports = router;
