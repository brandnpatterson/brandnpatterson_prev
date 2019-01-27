const express = require('express');
const router = express.Router();

const index = require('../controllers/indexController');
const riot = require('../controllers/riotController');

router.get('/riot/champions', riot.storeChampions);
router.get('/riot/summoner/:summonerName', riot.getSummonerInfo);
router.get('/riot/summoner/:summonerName/mastery', riot.getChampionMastery);
router.get('*', index);

module.exports = router;
