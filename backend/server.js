const express = require('express');
const cors = require('cors');
const matchRoutes = require('./routes/matchRoutes');
const playerRoutes = require('./routes/playerRoutes');
const overRoutes = require('./routes/overRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use(matchRoutes);
app.use(playerRoutes);
app.use(overRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
