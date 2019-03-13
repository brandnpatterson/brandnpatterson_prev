const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;
const Octokit = require('@octokit/rest');
const { sequelize } = require('../models');
const Language = require('../models/language');

/**
 *  DB
 */
const retrieveUserInfoFromDB = () => {
  return sequelize.sync().then(() => {
    return Language(sequelize)
      .findAll()
      .then(languages => languages);
  });
};

/**
 *  GET
 */
const octokit = new Octokit({
  auth() {
    return `${client_id} ${client_secret}`;
  },
  userAgent: 'octokit/rest.js v1.2.3',
  baseUrl: 'https://api.github.com'
});

const getUserProfile = () => {
  return octokit.search.users({ q: 'brandnpatterson' });
};

const getUserRepos = async () => {
  const repos = [
    'brandnpatterson',
    'runebear',
    'coriander',
    'form-component',
    'contact-bp',
    'hello-webpack',
    'shs-repo-updater',
    'filter-js',
    'dev-conn-ector',
    'emoji-tac-toe'
  ];

  const requests = repos.map(repo => {
    return octokit.repos.get({
      owner: 'brandnpatterson',
      repo: repo + '/languages'
    });
  });

  return await Promise.all(requests);
};

/**
 *  Exports
 */
exports.storeUserInfo = async (req, res) => {
  const allRequests = await getUserRepos();
  const allData = allRequests.map(req => req.data);
  const topTenData = {};

  allData.map(group => {
    Object.keys(group).map(key => {
      if (!topTenData[key]) {
        topTenData[key] = group[key];
      } else {
        topTenData[key] += group[key];
      }
    });
  });

  sequelize
    .sync()
    .then(() => {
      Object.keys(topTenData).map(key => {
        const newLang = {
          name: key,
          points: topTenData[key]
        };

        Language(sequelize).findOrCreate({ where: newLang, newLang });
      });
    })
    .then(() => res.json({ message: 'languages saved to database' }));
};

exports.getUserInfo = async (req, res) => {
  const github = await getUserProfile();
  const languages = await retrieveUserInfoFromDB();

  res.json({ ...github.data, languages });
};
