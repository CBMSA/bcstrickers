const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const matchRoutes = require('./routes/match');
const transferRoutes = require('./routes/transfer');
const bettingRoutes = require('./routes/betting');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/match', matchRoutes);
app.use('/api/transfer', transferRoutes);
app.use('/api/bet', bettingRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
