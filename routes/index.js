const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const riotController = require('../controllers/riotController');
const userController = require('../controllers/userController');

router.get('/users', userController.getUsers);
router.get('/summoner/:summonerName', riotController.getSummonerInfo);
router.get('*', indexController);

module.exports = router;
