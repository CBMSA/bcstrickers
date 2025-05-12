const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
  res.send('Login route');
});
router.post('/register', async (req, res) => {
  res.send('Register route');
});

module.exports = router;
