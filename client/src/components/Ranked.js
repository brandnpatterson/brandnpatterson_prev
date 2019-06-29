import React from 'react';
import { object, string } from 'prop-types';
import styled from 'styled-components';
import { mediumUp } from '../util/media';

const propTypes = {
  data: object,
  name: string.isRequired
};

const Ranked = ({ name, data }) => {
  if (!data || Object.keys(data).length === 0) {
    return false;
  }

  return (
    <StyledRanked>
      <h3>Ranked {name}</h3>
      <p>League Name: {data.leagueName}</p>
      <p>
        Tier: {data.tier} {data.leaguePoints}
      </p>
      <p>Wins: {data.wins}</p>
      <p>Losses: {data.losses}</p>
      <p>Win Percentage: {data.winPercentage}%</p>
    </StyledRanked>
  );
};

const StyledRanked = styled.div`
  padding: 2rem 0;

  @media ${mediumUp} {
    padding: 2rem 2.9rem;
  }
`;

Ranked.propTypes = propTypes;

export default Ranked;
