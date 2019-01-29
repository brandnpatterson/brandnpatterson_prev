const { axiosReq } = require('../handlers');
const repos = require('../data/repos');

/**
 *  URLs
 */
const github = user =>
  `https://api.github.com/users/${user}/repos?per_page=100`;

/**
 *  GET
 */
const getUserInfo = user => {
  return axiosReq({
    url: github(user)
  });
};

const getLangUrls = async repos => {
  const urls = repos.map(repo => axiosReq({ url: repo.languages_url }));

  return await Promise.all(urls);
};

/**
 *  Exports
 */
exports.userInfo = async (req, res) => {
  const half = Math.ceil(repos.length / 2);
  const leftside = repos.splice(0, half);
  const rightside = repos;

  // const languages = await getLangUrls(leftside);

  res.json(leftside);
};
