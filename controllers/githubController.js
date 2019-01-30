const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;
const Octokit = require('@octokit/rest');
const langResults = require('../data/languages');

/**
 *  GET
 */
const getAllRequests = async () => {
  const octokit = new Octokit({
    auth() {
      return `${client_id} ${client_secret}`;
    },
    userAgent: 'octokit/rest.js v1.2.3',
    baseUrl: 'https://api.github.com'
  });

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
exports.userInfo = async (req, res) => {
  if (!langResults) {
    const allRequests = await getAllRequests(repos);

    res.json(allRequests);
  }

  const langData = langResults.map(lang => lang.data);
  const topTenData = {};

  langData.map(group => {
    Object.keys(group).map(key => {
      if (!topTenData[key]) {
        topTenData[key] = group[key];
      } else {
        topTenData[key] += group[key];
      }
    });
  });

  res.json(topTenData);
};
