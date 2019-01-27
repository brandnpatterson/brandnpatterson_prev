const Sequelize = require('sequelize');

('use strict');
module.exports = sequelize => {
  const Champion = sequelize.define(
    'Champion',
    {
      key: Sequelize.STRING,
      name: Sequelize.STRING,
      src: Sequelize.STRING
    },
    {}
  );
  Champion.associate = function(models) {
    // associations can be defined here
  };
  return Champion;
};
