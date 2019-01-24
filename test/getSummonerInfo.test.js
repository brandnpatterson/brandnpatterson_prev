const nock = require('nock');
const expect = require('chai').expect;
const envPath = __dirname + '/../.env';
require('dotenv').config({ path: envPath });
const { getReq } = require('../controllers/riotController');

const { summonerError, summonerInfo } = require('./testData/summonerData');

const riotGames = 'https://na1.api.riotgames.com/lol';
const summoner = '/summoner/v4/summoners/by-name/brandybot';

describe('Summoner Info tests', () => {
  it('should return summoner info if it exists', async () => {
    nock(riotGames)
      .get(summoner)
      .reply(200, summonerInfo);

    return getReq(riotGames + summoner).then(response => {
      expect(response.name).to.equal('Brandy Bot');
    });
  });

  it('should return an error if the summoner does not exist', async () => {
    nock(riotGames)
      .get(summoner)
      .reply(400, summonerError);

    return getReq(riotGames + summoner).then(response => {
      expect(response.status.status_code).to.equal(404);
    });
  });
});
