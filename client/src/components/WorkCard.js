import React from "react";
import { object } from "prop-types";
import styled from "styled-components";
import { boxShadow, cardColor, lightgray, orange, surf } from "../util/colors";
import { largeUp, mediumUp, smallOnly } from "../util/media";

const propTypes = {
  children: object.isRequired
};

const WorkCard = props => {
  return <StyledWorkCard>{props.children}</StyledWorkCard>;
};

const StyledWorkCard = styled.div`
  background: ${cardColor};
  border-radius: 0.3125rem;
  box-shadow: ${boxShadow};

  img {
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

  .main-content {
    @media ${mediumUp} {
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
      border-top-left-radius: 0.3125rem;
      border-top-right-radius: 0.3125rem;
    }
  }

  .main-content.main-content-sabre {
    margin-bottom: 0;

    @media ${mediumUp} {
      padding: 3rem 4rem 1rem;
    }
  }

  .secondary-content {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 3rem;
    padding-bottom: 3rem;

    @media ${mediumUp} {
      flex-direction: row;
      flex-wrap: wrap;
      padding-bottom: 5rem;
    }
  }

  .secondary-content a {
    border-radius: 0.3125rem;
    height: 18.75rem;
    margin: 1.5rem auto;
    max-width: 31.25rem;

    @media ${smallOnly} {
      height: 12.5rem;
    }

    @media ${mediumUp} {
      margin: 1.5rem;
      max-width: 43%;
    }
  }

  .secondary-content img {
    @media ${smallOnly} {
      height: 12.5rem;
    }

    height: 15.75rem;
  }

  .sabre-wrap {
    background: #e50000;
    height: 8rem;
    margin: 0 auto;
    min-width: 100%;
    width: 17rem;

    @media ${smallOnly} {
      min-width: 100%;
    }

    @media ${largeUp} {
      min-width: 0;
      width: 17rem;
    }
  }

  .sabre-wrap img {
    height: 8rem;
    width: 10rem;
  }

  .hotel-name {
    font-weight: bold;

    @media ${smallOnly} {
      padding-left: 1rem;
    }
  }

  .card-content {
    background: ${cardColor};
    border-bottom-left-radius: 0.3125rem;
    border-bottom-right-radius: 0.3125rem;
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
      margin: 0;
      max-width: 100%;
      padding: 0 2rem;
    }
  }

  .card-content.card-content-sabre {
    background: none;
    box-shadow: none;
    padding-left: 0;

    @media ${smallOnly} {
      padding: 1rem;
    }

    @media ${mediumUp} {
      background: ${cardColor};
    }

    h1 {
      color: #fff;
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

  .card-header.card-header-sabre {
    padding-left: 0;
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

  .built-with-wrap .languages-used {
    margin: 0;
  }

  .built-with-wrap p:not(.built-with) {
    @media ${mediumUp} {
      margin: 0 auto 2.2rem;
    }
  }

  .built-with {
    color: ${orange};

    @media ${mediumUp} {
      margin: 0 auto;
    }
  }
`;

WorkCard.propTypes = propTypes;

export default WorkCard;
