const express = require('express');
const { getPlayerStats } = require('../controllers/playerController');

const router = express.Router();

router.get('/api/players', getPlayerStats);

module.exports = router;
