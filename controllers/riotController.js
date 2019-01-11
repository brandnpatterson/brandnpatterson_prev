const axios = require('axios');
const req = 'https://na1.api.riotgames.com/lol/summoner/v3';

const getSummoner = name => {
  return axios
    .get(`${req}/summoners/by-name/${name}?api_key=${process.env.RIOT_API_KEY}`)
    .then(res => res.data);
};

exports.getSummoner = async (req, res) => {
  const summoner = await getSummoner(req.params.summonerName);

  res.json(summoner);
};
