const db = require('../services/db'); // Database connection

const getAllMatches = (req, res) => {
    const query = 'SELECT * FROM matches';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

const getMatchById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM matches WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results[0]);
    });
};

module.exports = { getAllMatches, getMatchById };