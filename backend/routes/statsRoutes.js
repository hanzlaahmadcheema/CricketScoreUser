const express = require('express');
const { getPlayerStats, getTopPerformers } = require('../controllers/statsController');

const router = express.Router();

router.get('/api/player-stats', getPlayerStats);
router.get('/api/top-performers', getTopPerformers);

module.exports = router;
