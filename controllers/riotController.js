const axios = require('axios');

const ddragon = ddragon =>
  'http://ddragon.leagueoflegends.com/cdn/8.24.1/data/en_US' + ddragon;

const riotGames = riotGames =>
  `https://${
    process.env.RIOT_REIGON
  }.api.riotgames.com/lol${riotGames}?api_key=${process.env.RIOT_API_KEY}`;

const catchErrors = err => {
  console.error(`${err.response.status} ${err.response.statusText}`);
};

/**
 *  API - GET
 */
const getChampions = () => {
  return axios
    .get(ddragon(`/champion.json`))
    .then(res => res.data.data)
    .catch(err => displayError(err));
};

const getSummoner = name => {
  return axios
    .get(riotGames(`/summoner/v4/summoners/by-name/${name}`))
    .then(res => res.data)
    .catch(err => catchErrors(err));
};

const getSummonerRank = summonerId => {
  return axios
    .get(riotGames(`/league/v4/positions/by-summoner/${summonerId}`))
    .then(res => res.data)
    .catch(err => catchErrors(err));
};

const getChampionMastery = summonerId => {
  return axios
    .get(
      riotGames(
        `/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}`
      )
    )
    .then(res => res.data)
    .catch(err => catchErrors(err));
};

/**
 *  Filter
 */
const filterChampionById = (champions, championMastery) => {
  return championMastery.slice(0, 10).map(mastery => {
    const champion = Object.values(champions).filter(
      champ => mastery.championId.toString() === champ.key
    )[0];

    return champion.name;
  });
};

const filterChampionsByTags = champions => {
  const tags = {};

  champions.forEach(champ => {
    champ.roles.forEach(role => {
      tags[role] = [];
    });
  });

  champions.forEach(champ => {
    champ.roles.forEach(role => {
      tags[role].push(champ.name);
    });
  });

  return tags;
};

exports.getSummonerInfo = async (req, res) => {
  const champions = await getChampions();
  const summoner = await getSummoner(req.params.summonerName);
  const summonerRank = await getSummonerRank(summoner.id);
  const championMastery = await getChampionMastery(summoner.id);
  const mostPlayed = filterChampionById(champions, championMastery);

  res.json({
    summoner: {
      level: summoner.summonerLevel,
      name: summoner.name,
      mostPlayed: mostPlayed,
      ranked: {
        flex: summonerRank[0],
        solo: summonerRank[1]
      }
    }
  });
};
