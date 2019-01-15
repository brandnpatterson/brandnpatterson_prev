const axios = require('axios');

const ddragon = ddragon =>
  'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US' + ddragon;

const riotGames = riotGames =>
  `https://${
    process.env.RIOT_REIGON
  }.api.riotgames.com/lol${riotGames}?api_key=${process.env.RIOT_API_KEY}`;

const getChampions = () => {
  return axios
    .get(ddragon(`/champion.json`))
    .then(res => res.data.data)
    .catch(err => err);
};

const getSummoner = name => {
  return axios
    .get(riotGames(`/summoner/v4/summoners/by-name/${name}`))
    .then(res => res.data)
    .catch(err => err);
};

const getChampoinMastery = summonerId => {
  return axios
    .get(
      riotGames(
        `/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}`
      )
    )
    .then(res => res.data)
    .catch(err => err);
};

const getChampionById = (champions, championMastery) => {
  return championMastery.slice(0, 31).map(mastery => {
    const champion = Object.values(champions).filter(
      champ => mastery.championId.toString() === champ.key
    )[0];

    return {
      name: champion.name,
      roles: champion.tags
    };
  });
};

const getChampionsByTags = champions => {
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
  const championMastery = await getChampoinMastery(summoner.id);
  const mostPlayed = getChampionById(champions, championMastery);
  const filterByTags = getChampionsByTags(mostPlayed);

  res.json({
    summoner: {
      level: summoner.summonerLevel,
      name: summoner.name,
      mostPlayed: filterByTags
    }
  });
};
