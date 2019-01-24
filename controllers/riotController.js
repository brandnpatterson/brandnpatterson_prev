const axios = require('axios');

/**
 *  URLs
 */
const ddragon = url => 'http://ddragon.leagueoflegends.com/cdn/8.24.1' + url;
const riotGames = (url, reigon = 'na1') =>
  `https://${reigon}.api.riotgames.com/lol${url}?api_key=${
    process.env.RIOT_API_KEY
  }`;

/**
 *  GET
 */
exports.getReq = url => {
  return axios
    .get(url)
    .then(response => response.data)
    .catch(err => err.response.data);
};

const getChampions = () => {
  return exports.getReq(ddragon('/data/en_US/champion.json'));
};

const getSummoner = name => {
  return exports.getReq(riotGames(`/summoner/v4/summoners/by-name/${name}`));
};

const getSummonerRank = summoner => {
  return exports.getReq(
    riotGames(`/league/v4/positions/by-summoner/${summoner.id}`)
  );
};

const getChampionMastery = summoner => {
  return exports.getReq(
    riotGames(
      `/champion-mastery/v4/champion-masteries/by-summoner/${summoner.id}`
    )
  );
};

/**
 *  Filter
 */
const filterChampionById = (champions, championIds) => {
  const champVals = Object.values(champions.data);

  const mostPlayedByName = championIds.slice(0, 10).map(id => {
    return champVals.filter(champ => champ.key === id)[0];
  });

  const champData = mostPlayedByName.map(champ => {
    return {
      id: champ.key,
      name: champ.name,
      src: ddragon(`/img/champion/${champ.name}.png`)
    };
  });

  return champData;
};

/**
 *  Exports
 */
exports.getSummonerInfo = async (req, res) => {
  const summoner = await getSummoner(req.params.summonerName);
  const summonerRank = await getSummonerRank(summoner);

  if (Array.isArray(summonerRank)) {
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

    return res.json(rankedData);
  }

  res.json(summoner);
};

exports.getChampionMastery = async (req, res) => {
  const summoner = await getSummoner(req.params.summonerName);
  const champions = await getChampions();
  const championMastery = await getChampionMastery(summoner);

  if (Array.isArray(championMastery)) {
    const championIds = championMastery.map(champ => {
      return champ.championId.toString();
    });

    if (champions) {
      const mostPlayed = filterChampionById(champions, championIds);

      return res.json(mostPlayed);
    }
  }

  res.json(summoner);
};
