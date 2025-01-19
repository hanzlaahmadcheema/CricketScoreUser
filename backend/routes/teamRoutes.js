const express = require('express');
const { getTeamsAndPlayers } = require('../controllers/teamController');

const router = express.Router();

router.get('/api/teams-players', getTeamsAndPlayers);

module.exports = router;
