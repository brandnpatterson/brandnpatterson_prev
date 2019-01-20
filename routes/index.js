const express = require('express');
const router = express.Router();

const index = require('../controllers/indexController');
const riot = require('../controllers/riotController');

const errors = fn => {
  console.log(fn);

  return fn;
};

router.get('/riot/summoner/:summonerName', errors(riot.getSummonerInfo));
router.get('/riot/summoner/:summonerName/mastery', riot.getChampionMastery);
router.get('*', index);

module.exports = router;
