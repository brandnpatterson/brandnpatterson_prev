import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';
import { boxShadow, cardColor, lightgray, orange, surf } from '../util/colors';
import { largeUp, mediumUp, smallOnly } from '../util/media';

const propTypes = {
  children: array.isRequired
};

const ProjectCard = props => {
  return <StyledProjectCard>{props.children}</StyledProjectCard>;
};

const StyledProjectCard = styled.div`
  @media ${mediumUp} {
    background: ${cardColor};
    border-radius: 5px;
    box-shadow: ${boxShadow};
    color: ${lightgray};
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    padding: 3rem;
  }

  @media ${largeUp} {
    flex-direction: row-reverse;
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
      box-shadow: none;
      max-width: 100%;
      padding: 0 2rem;
    }
  }

  .card-header {
    color: ${surf};
    font-size: 1.25rem;
    margin-top: 0;
    padding: 2rem 2rem 0;

    @media ${mediumUp} {
      font-size: 2rem;
      margin-bottom: 0;
      margin-top: 2rem;
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

  .built-with-wrap p {
    margin: 0;

    @media ${mediumUp} {
      margin: 1rem auto;
    }
  }

  .built-with {
    color: ${orange};
  }
`;

ProjectCard.propTypes = propTypes;

export default ProjectCard;
