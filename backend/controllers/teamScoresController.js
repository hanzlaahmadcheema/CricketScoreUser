// backend/controllers/teamScoresController.js
const db = require('../db'); // Correct import

exports.getTeamScores = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM team_scores');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch team scores data' });
    }
};