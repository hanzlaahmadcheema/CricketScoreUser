const express = require('express');
const cors = require('cors');
const matchRoutes = require('./routes/matchRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/match', matchRoutes);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
