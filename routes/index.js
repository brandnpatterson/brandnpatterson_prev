const express = require('express');
const router = express.Router();

const index = require('../controllers/indexController');
const github = require('../controllers/githubController');
const riot = require('../controllers/riotController');

router.get('/github/user/brandnpatterson', github.getUserInfo);
router.get('/github/user/brandnpatterson/store', github.storeUserInfo);

router.get('/riot/champions/store', riot.storeChampions);
router.get('/riot/summoner/:summonerName', riot.getSummonerInfo);
router.get('/riot/summoner/:summonerName/mastery', riot.getChampionMastery);

router.get('*', index);

module.exports = router;
