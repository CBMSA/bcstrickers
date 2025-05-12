const express = require('express');
const router = express.Router();

router.post('/place', (req, res) => {
  res.send('Bet placed');
});

module.exports = router;
