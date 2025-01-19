exports.getOverSummary = async (req, res) => {
    try {
      const [overs] = await db.query(`
        SELECT over_number, runs, wickets 
        FROM overs 
        WHERE match_id = (SELECT id FROM matches WHERE status = 'Ongoing')
      `);
      res.json(overs);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch over summary', details: err.message });
    }
  };
  