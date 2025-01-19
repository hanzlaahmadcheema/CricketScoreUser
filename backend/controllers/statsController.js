const db = require('../services/db');

exports.getPlayerStats = async (req, res) => {
    try {
        console.log('Fetching player stats...');
        const [stats] = await db.query(`
            SELECT name, runsScored, ballsFaced, fours, sixes, oversBowled, wickets 
            FROM players
        `);
        console.log('Player stats fetched:', stats);
        res.json(stats);
    } catch (err) {
        console.error('Error fetching player stats:', err.message);
        res.status(500).json({ error: 'Failed to fetch player stats', details: err.message });
    }
};

exports.getTopPerformers = async (req, res) => {
    try {
        console.log('Fetching top performers...');
        const [topBatsman] = await db.query(`
            SELECT name, runsScored 
            FROM players 
            ORDER BY runsScored DESC 
            LIMIT 1
        `);

        const [topBowler] = await db.query(`
            SELECT name, wickets 
            FROM players 
            ORDER BY wickets DESC 
            LIMIT 1
        `);

        console.log('Top performers fetched:', { topBatsman: topBatsman[0], topBowler: topBowler[0] });
        res.json({ topBatsman: topBatsman[0], topBowler: topBowler[0] });
    } catch (err) {
        console.error('Error fetching top performers:', err.message);
        res.status(500).json({ error: 'Failed to fetch top performers', details: err.message });
    }
};