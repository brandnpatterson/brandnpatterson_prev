import React, { useState } from 'react';
import styled from 'styled-components';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { surf } from '../../../util/colors';
import { mediumUp, largeUp } from '../../../util/media';

const propTypes = {
  github: object.isRequired
};

function Home() {
  const [index, setIndex] = useState(0);
  const titles = [
    'Front End Developer',
    'JavaScript Engineer',
    'Problem Solver',
    'Leader',
    'Teacher',
    'Learner'
  ];

  function titleTimeout() {
    setTimeout(() => {
      if (index === titles.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2000);
  }

  titleTimeout();

  return (
    <StyledHome>
      <div className="title-area">
        <div className="title-text-wrap">
          <h1 className="title-item title-first">Hi.</h1>
          <h2 className="title-item">
            I'm <span style={{ color: surf }}>Brandon,</span>
          </h2>
          <h3 className="title-item title-last">{titles[index]}</h3>
        </div>
        <div className="see-my-work-wrap">
          <button className="see-my-work">See my work</button>
        </div>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={['fab', 'js']} size="6x" />
        <FontAwesomeIcon icon={['fab', 'html5']} size="6x" />
        <FontAwesomeIcon icon={['fab', 'css3-alt']} size="6x" />
        <FontAwesomeIcon icon={['fab', 'sass']} size="6x" />
        <FontAwesomeIcon icon={['fab', 'react']} size="6x" />
        <FontAwesomeIcon icon={['fab', 'node-js']} size="6x" />
        <FontAwesomeIcon icon={['fab', 'php']} size="6x" />
        <FontAwesomeIcon icon="database" size="6x" />
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  .title-area {
    padding-left: 0;

    @media ${largeUp} {
      padding-left: 0;
    }

    .title-item {
      font-size: 2.2rem;
      margin: 0 auto;

      @media ${mediumUp} {
        font-size: 3rem;
      }

      @media ${largeUp} {
        font-size: 5rem;
        max-width: 100%;
      }
    }
  }

  .title-text-wrap {
    margin-bottom: 2rem;
  }

  .see-my-work {
    background: none;
    border: 1px solid ${surf};
    color: ${surf};
    margin-bottom: 2.5rem;
    padding: 0.65rem 2.5rem;

    @media ${mediumUp} {
      margin-bottom: 2rem;
      padding: 1rem 3rem;
    }
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    height: 20rem;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 20rem;
    width: 100%;

    @media ${mediumUp} {
      flex-wrap: none;
      height: 15rem;
      max-width: 45rem;
    }

    svg {
      margin: 0.25rem 0.75rem;
      width: 4rem;

      @media ${mediumUp} {
        margin: 2rem;
        width: 6rem;
      }
    }
  }
`;

Home.propTypes = propTypes;

const mapStateToProps = state => ({
  github: state.github
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
