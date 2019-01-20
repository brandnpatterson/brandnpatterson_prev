const axios = require('axios');

/**
 *  URLs
 */
const ddragon = url => 'http://ddragon.leagueoflegends.com/cdn/8.24.1' + url;
const riotGames = url =>
  `https://${process.env.RIOT_REIGON}.api.riotgames.com/lol${url}?api_key=${
    process.env.RIOT_API_KEY
  }`;

/**
 *  GET
 */
const getReq = url => {
  return axios
    .get(url)
    .then(res => res.data)
    .catch(err => ({
      error: `${err.response.status} ${err.response.statusText}`
    }));
};

const getChampions = () => {
  return getReq(ddragon('/data/en_US/champion.json'));
};

const getSummoner = name => {
  return getReq(riotGames(`/summoner/v4/summoners/by-name/${name}`));
};

const getSummonerRank = summonerId => {
  return getReq(riotGames(`/league/v4/positions/by-summoner/${summonerId}`));
};

const getChampionMastery = summonerId => {
  const url = `/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}`;

  return getReq(riotGames(url));
};

/**
 *  Filter
 */
const filterChampionById = (champions, championIds) => {
  const champVals = Object.values(champions);

  const mostPlayedByName = championIds.slice(0, 10).map(id => {
    return champVals.filter(champ => champ.key === id)[0];
  });

  const champData = mostPlayedByName.map(champ => {
    return {
      id: champ.key,
      image: ddragon(`/img/champion/${champ.name}.png`),
      name: champ.name
    };
  });

  return champData;
};

/**
 *  Exports
 */
exports.getSummonerInfo = async (req, res) => {
  const summoner = await getSummoner(req.params.summonerName);
  const summonerRank = await getSummonerRank(summoner.id);

  const ranked = summonerRank.map(rank => {
    const totalGames = rank.wins + rank.losses;
    const percentage = (rank.wins / totalGames) * 100;

    return {
      leagueName: rank.leagueName,
      tier: `${rank.tier} ${rank.rank}`,
      leaguePoints: rank.leaguePoints.toString(),
      wins: rank.wins.toString(),
      losses: rank.losses.toString(),
      winPercentage: percentage.toFixed(2)
    };
  });

  const rankedData = {
    name: summoner.name,
    level: summoner.summonerLevel.toString(),
    flex: ranked[0],
    solo: ranked[1]
  };

  res.json(rankedData);
};

exports.getChampionMastery = async (req, res) => {
  const champions = await getChampions();
  const summoner = await getSummoner(req.params.summonerName);
  const championMastery = await getChampionMastery(summoner.id);
  const championIds = championMastery.map(champ => champ.championId.toString());
  const mostPlayed = filterChampionById(champions.data, championIds);

  res.json(mostPlayed);
};
