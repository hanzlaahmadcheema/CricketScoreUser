// backend/routes/matchRoutes.js
const express = require('express');
const matchController = require('../controllers/matchController');
const teamScoresController = require('../controllers/teamScoresController'); // Correct import

const router = express.Router();

router.get('/match-summary', matchController.getMatchSummary);
router.get('/team-scores', teamScoresController.getTeamScores); // Correct route

module.exports = router;