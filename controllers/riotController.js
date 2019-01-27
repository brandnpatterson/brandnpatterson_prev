const axios = require('axios');
const { sequelize } = require('../models');
const Champion = require('../models/champion');

/**
 *  URLs
 */
const ddragon = url => 'http://ddragon.leagueoflegends.com/cdn/9.1.1' + url;
const riotGames = (url, reigon = 'na1') =>
  `https://${reigon}.api.riotgames.com/lol${url}?api_key=${
    process.env.RIOT_API_KEY
  }`;

/**
 *  GET
 */
const getChampions = () => {
  return exports.getReq(ddragon('/data/en_US/champion.json'));
};

const retrieveChampionsFromDB = () => {
  return sequelize.sync().then(() => {
    return Champion(sequelize)
      .findAll()
      .then(champions => champions);
  });
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
const filterChampionById = (champions, championIds, amount) => {
  return championIds
    .slice(0, amount)
    .map(id => champions.filter(champ => champ.key === id.toString())[0]);
};

/**
 *  Exports
 */
exports.getReq = url => {
  return axios
    .get(url)
    .then(response => response.data)
    .catch(err => err.response.data);
};

exports.storeChampions = async (req, res) => {
  const champions = await getChampions();
  const champVals = Object.values(champions.data);

  sequelize
    .sync()
    .then(() => {
      champVals.map(champ => {
        const newChamp = {
          key: champ.key,
          name: champ.name,
          src: ddragon(`/img/champion/${champ.image.full}`)
        };

        Champion(sequelize).findOrCreate({ where: newChamp, newChamp });
      });
    })
    .then(() => res.json({ message: 'champions saved to database' }));
};

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
        leaguePoints: rank.leaguePoints,
        wins: rank.wins,
        losses: rank.losses,
        winPercentage: percentage.toFixed(2)
      };
    });

    const rankedData = {
      name: summoner.name,
      level: summoner.summonerLevel,
      ranked: {
        flex: ranked[0] ? ranked[0] : {},
        solo: ranked[1] ? ranked[1] : {}
      }
    };

    return res.json(rankedData);
  }

  res.json(summoner);
};

exports.getChampionMastery = async (req, res) => {
  const summoner = await getSummoner(req.params.summonerName);
  const champions = await retrieveChampionsFromDB();
  const championMastery = await getChampionMastery(summoner);

  if (Array.isArray(championMastery)) {
    const championIds = championMastery.map(champ => champ.championId);
    const mostPlayed = filterChampionById(champions, championIds, 10);

    return res.json(mostPlayed);
  }

  res.json(summoner);
};
