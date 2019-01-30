const Sequelize = require('sequelize');

module.exports = sequelize => {
  const Language = sequelize.define(
    'Language',
    {
      name: Sequelize.STRING,
      points: Sequelize.INTEGER
    },
    {}
  );
  Language.associate = function(models) {
    // associations can be defined here
  };
  return Language;
};
