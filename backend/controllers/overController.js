const db = require('../services/db');

const getOversSummary = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM overs WHERE match_id = (SELECT id FROM matches WHERE status = "Ongoing" LIMIT 1)');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch over summary', error });
    }
};

module.exports = { getOversSummary };
