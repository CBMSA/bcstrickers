const express = require('express');
const router = express.Router();

router.get('/players', (req, res) => {
  res.send('List of available players');
});

module.exports = router;
