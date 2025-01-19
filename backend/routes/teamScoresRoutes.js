// backend/routes/teamScoresRoutes.js
const express = require('express');
const teamScoresController = require('../controllers/teamScoresController');

const router = express.Router();

router.get('/team-scores', teamScoresController.getTeamScores);

module.exports = router;