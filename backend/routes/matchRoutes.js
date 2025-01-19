const express = require('express');
const {
  getMatchDetails,
  getOverSummary,
  getPlayers,
  getPlayerStats,
  getTopPerformers,
} = require('../controllers/matchController');

const router = express.Router();

router.get('/', getMatchDetails);
router.get('/overs', getOverSummary);
router.get('/players', getPlayers);
router.get('/stats', getPlayerStats);
router.get('/top-performers', getTopPerformers);

module.exports = router;
