const axios = require('axios');

exports.axiosReq = ({ url, method = 'get', headers = {} }) => {
  return axios({
    url,
    method,
    headers
  })
    .then(response => response.data)
    .catch(err => err.response.data);
};
