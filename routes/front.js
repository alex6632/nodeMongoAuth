// Importer et configurer les composants de la route
let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/profile', (req, res) => {
  res.render('profile');
});

module.exports = router;