const db = require('../services/db');

exports.getMatchDetails = async (req, res) => {
    try {
        console.log('Fetching match details...');
        const [match] = await db.query(`
            SELECT * 
            FROM matches 
            WHERE status = 'Ongoing' 
            LIMIT 1
        `);

        if (!match.length) {
            console.log('No ongoing match found');
            return res.status(404).json({ message: 'No ongoing match found' });
        }

        const matchDetails = match[0];
        console.log('Match details fetched:', matchDetails);
        res.json(matchDetails);
    } catch (err) {
        console.error('Error fetching match details:', err.message);
        res.status(500).json({ error: 'Failed to fetch match details', details: err.message });
    }
};

exports.getOverSummary = async (req, res) => {
    try {
        console.log('Fetching over summary...');
        const [overs] = await db.query(`
            SELECT over_number, runs, wickets 
            FROM overs 
            WHERE match_id = (SELECT id FROM matches WHERE status = 'Ongoing')
        `);
        console.log('Over summary fetched:', overs);
        res.json(overs);
    } catch (err) {
        console.error('Error fetching over summary:', err.message);
        res.status(500).json({ error: 'Failed to fetch over summary', details: err.message });
    }
};

exports.getMatchSummary = async (req, res) => {
    try {
        console.log('Fetching match summary...');
        const [summary] = await db.query(`
            SELECT * 
            FROM matches 
            WHERE status = 'Ongoing' 
            LIMIT 1
        `);

        if (!summary.length) {
            console.log('No ongoing match found');
            return res.status(404).json({ message: 'No ongoing match found' });
        }

        const matchSummary = summary[0];
        console.log('Match summary fetched:', matchSummary);
        res.json(matchSummary);
    } catch (err) {
        console.error('Error fetching match summary:', err.message);
        res.status(500).json({ error: 'Failed to fetch match summary', details: err.message });
    }
};