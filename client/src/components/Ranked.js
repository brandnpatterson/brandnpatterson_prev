import React from 'react';
import { object, string } from 'prop-types';

const propTypes = {
  data: object.isRequired,
  name: string.isRequired
};

const Ranked = ({ name, data }) => {
  if (Object.keys(data).length === 0) {
    return false;
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>League Name: {data.leagueName}</p>
      <p>
        Tier: {data.tier} {data.leaguePoints}
      </p>
      <p>Wins: {data.wins}</p>
      <p>Losses: {data.losses}</p>
      <p>Win Percentage: {data.winPercentage}%</p>
    </div>
  );
};

Ranked.propTypes = propTypes;

export default Ranked;
