const db = require('../services/db');

exports.getPlayers = async (req, res) => {
    try {
        const [players] = await db.query('SELECT * FROM players WHERE team_id IN (1, 2)');
        res.json(players);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch players', details: err.message });
    }
};