const db = require('../services/db');

const getPlayerStats = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM players');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch player statistics', error });
    }
};

module.exports = { getPlayerStats };
