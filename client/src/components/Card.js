import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';
import { boxShadow, cardColor, surf, textColor } from '../../util/colors';
import { smallOnly } from '../../util/media';

const propTypes = {
  children: array.isRequired
};

const Card = props => {
  return <StyledCard>{props.children}</StyledCard>;
};

Card.propTypes = propTypes;

const StyledCard = styled.div`
  background: ${cardColor};
  border-radius: 5px;
  box-shadow: ${boxShadow};
  color: ${textColor};
  margin-bottom: 3rem;
  padding: 3rem;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1140px) {
    flex-direction: row;
  }

  img {
    height: 25rem;
    margin: 0 auto;
    max-width: 100%;
    width: 37rem;

    @media ${smallOnly} {
      height: 14rem;
    }
  }

  .card-content {
    flex: 2;
    padding: 2rem;

    h1 {
      color: ${surf};
    }
  }
`;

export default Card;
