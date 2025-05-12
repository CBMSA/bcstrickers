const express = require('express');
const router = express.Router();

router.post('/start', (req, res) => {
  res.send('Match started');
});

module.exports = router;
