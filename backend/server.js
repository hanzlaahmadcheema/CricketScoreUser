// backend/server.js
const express = require('express');
const matchRoutes = require('./routes/matchRoutes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', matchRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});