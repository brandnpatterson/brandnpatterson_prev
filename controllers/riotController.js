const { axiosReq } = require('../handlers');
const { sequelize } = require('../models');
const Champion = require('../models/champion');

/**
 *  URLs
 */
const patch = '9.5.1';
const ddragon = url => `http://ddragon.leagueoflegends.com/cdn/${patch}${url}`;
const riotGames = (url, reigon = 'na1') =>
  `https://${reigon}.api.riotgames.com/lol${url}?api_key=${process.env.RIOT_API_KEY}`;

/**
 *  DB
 */
const retrieveChampionsFromDB = () => {
  return sequelize.sync().then(() => {
    return Champion(sequelize)
      .findAll()
      .then(champions => champions);
  });
};

/**
 *  GET
 */
const getChampions = () => {
  return axiosReq({
    url: ddragon('/data/en_US/champion.json')
  });
};

const getSummonerAccount = name => {
  return axiosReq({
    url: riotGames(`/summoner/v4/summoners/by-name/${name}`)
  });
};

const getSummonerRank = summoner => {
  return axiosReq({
    url: riotGames(`/league/v4/positions/by-summoner/${summoner.id}`)
  });
};

const getChampionMastery = summoner => {
  return axiosReq({
    url: riotGames(
      `/champion-mastery/v4/champion-masteries/by-summoner/${summoner.id}`
    )
  });
};

/**
 *  Filter
 */
const filterChampionById = (champions, championIds, numberOfChamps) => {
  return championIds
    .slice(0, numberOfChamps)
    .map(id => champions.filter(champ => champ.key === id.toString())[0]);
};

/**
 *  Exports
 */
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
  const summoner = await getSummonerAccount(req.params.summonerName);
  const summonerRank = await getSummonerRank(summoner);

  // if summoner returns true
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

    let rankedData;

    if (summonerRank.length === 2) {
      rankedData = {
        name: summoner.name,
        level: summoner.summonerLevel,
        ranked: {
          flex: ranked[0] ? ranked[0] : {},
          solo: ranked[1] ? ranked[1] : {}
        }
      };
    } else {
      rankedData = {
        name: summoner.name,
        level: summoner.summonerLevel,
        ranked: {
          solo: ranked[0] ? ranked[0] : {}
        }
      };
    }

    res.json(rankedData);
  } else {
    // return err
    res.json(summoner);
  }
};

exports.getChampionMastery = async (req, res) => {
  const summoner = await getSummonerAccount(req.params.summonerName);
  const champions = await retrieveChampionsFromDB();
  const championMastery = await getChampionMastery(summoner);

  // if summoner returns true
  if (Array.isArray(championMastery)) {
    const championIds = championMastery.map(champ => champ.championId);
    const mostPlayed = filterChampionById(champions, championIds, 10);

    res.json(mostPlayed);
  } else {
    // return err
    res.json(summoner);
  }
};
