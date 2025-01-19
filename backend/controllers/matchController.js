const db = require('../services/db');

exports.getMatchDetails = async (req, res) => {
  try {
    const [match] = await db.query(`
      SELECT * 
      FROM matches 
      WHERE status = 'Ongoing' 
      LIMIT 1
    `);

    if (!match.length) {
      return res.status(404).json({ message: 'No ongoing match found' });
    }

    const matchDetails = match[0];
    res.json(matchDetails);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch match details', details: err.message });
  }
};