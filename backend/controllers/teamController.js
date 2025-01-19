const db = require('../services/db');

exports.getTeamsAndPlayers = async (req, res) => {
    try {
        console.log('Fetching teams and players...');
        const [teams] = await db.query(`
            SELECT * 
            FROM teams 
            WHERE id IN (1, 2)
        `);

        const [players] = await db.query(`
            SELECT * 
            FROM players 
            WHERE team_id IN (1, 2)
        `);

        console.log('Teams fetched:', teams);
        console.log('Players fetched:', players);

        res.json({ teams, players });
    } catch (err) {
        console.error('Error fetching teams and players:', err.message);
        res.status(500).json({ error: 'Failed to fetch teams and players', details: err.message });
    }
};