const db = require('../services/db');

const getMatchDetails = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM matches WHERE status = "Ongoing" LIMIT 1');
        if (rows.length === 0) {
            return res.status(404).json({ message: 'No ongoing match found.' });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch match details', error });
    }
};

module.exports = { getMatchDetails };
