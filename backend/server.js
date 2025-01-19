const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const matchRoutes = require('./routes/matchRoutes'); // Example route file

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/matches', matchRoutes); // Route for match-related APIs

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
