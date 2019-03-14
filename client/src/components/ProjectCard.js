import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';
import { boxShadow, cardColor, surf, textColor } from '../../util/colors';
import { largeUp, mediumUp, smallOnly } from '../../util/media';

const propTypes = {
  children: array.isRequired
};

const ProjectCard = props => {
  return <StyledCard>{props.children}</StyledCard>;
};

ProjectCard.propTypes = propTypes;

const StyledCard = styled.div`
  @media ${mediumUp} {
    background: ${cardColor};
    border-radius: 5px;
    box-shadow: ${boxShadow};
    color: ${textColor};
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    padding: 3rem;
  }

  @media ${largeUp} {
    flex-direction: row;
  }

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: block;
    height: 30rem;
    margin: 0 auto;
    max-width: 100%;
    width: 40rem;

    @media ${smallOnly} {
      height: 14rem;
      width: 25rem;
    }

    @media ${mediumUp} {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      height: 25rem;
      max-width: 100%;
      width: 37rem;
    }

    &:hover {
      opacity: 0.5;
    }
  }

  .card-content {
    background: ${cardColor};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: ${boxShadow};
    flex: 2;
    margin: 0 auto 2.45rem;
    max-width: 40rem;
    padding: 0;

    @media ${smallOnly} {
      max-width: 25rem;
    }

    @media ${mediumUp} {
      background: none;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-radius: none;
      box-shadow: none;
      max-width: 100%;
      padding: 0 2rem 0 2rem;
    }
  }

  .card-header {
    color: ${surf};
    font-size: 1.25rem;
    letter-spacing: 4px;
    padding: 2rem 2rem 0 2rem;
    margin-top: 0;

    @media ${mediumUp} {
      font-size: 2rem;
      margin-top: 2rem;
      margin-bottom: 0;
      padding: 0;
    }

    @media ${largeUp} {
      margin-top: 0;
    }
  }

  .card-paragraphs {
    padding: 0 2rem 2rem;

    @media ${mediumUp} {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      padding: 0;
    }
  }

  .built-with p {
    margin: 0;

    &:nth-child(1) {
      margin-top: 2rem;
      font-weight: bold;
    }
  }
`;

export default ProjectCard;
