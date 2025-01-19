exports.getPlayerStats = async (req, res) => {
    try {
      const [stats] = await db.query(`
        SELECT name, runsScored, ballsFaced, fours, sixes, oversBowled, wickets 
        FROM players
      `);
      res.json(stats);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch player stats', details: err.message });
    }
  };
  exports.getTopPerformers = async (req, res) => {
    try {
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
  
      res.json({ topBatsman: topBatsman[0], topBowler: topBowler[0] });
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch top performers', details: err.message });
    }
  };
    