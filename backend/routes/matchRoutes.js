const express = require('express');
const { getMatchDetails } = require('../controllers/matchController');

const router = express.Router();

router.get('/api/match', getMatchDetails);

module.exports = router;
