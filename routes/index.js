const express = require('express');
const router = express.Router();

const index = require('../controllers/indexController');
const github = require('../controllers/githubController');
const riot = require('../controllers/riotController');

router.get('/github/user/brandnpatterson', github.userInfo);
router.get('/github/user/brandnpatterson/store', github.storeUserInfo);

router.get('/riot/champions/store', riot.storeChampions);
router.get('/riot/summoner/:summonerName', riot.summonerInfo);
router.get('/riot/summoner/:summonerName/mastery', riot.championMastery);

router.get('*', index);

module.exports = router;
