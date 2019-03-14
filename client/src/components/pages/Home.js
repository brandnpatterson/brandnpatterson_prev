import React, { useState } from 'react';
import styled from 'styled-components';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { surf } from '../../../util/colors';

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
      <div className="titles">
        <h1 className="title title-first">Hi,</h1>
        <h2 className="title">
          I'm <span style={{ color: surf }}>Brandon,</span>
        </h2>
        <h3 className="title title-last">{titles[index]}</h3>
      </div>
      <div className="icons-wrap">
        <div className="icons">
          <div className="icon-group">
            <FontAwesomeIcon icon={['fab', 'js']} size="6x" />
            <FontAwesomeIcon icon={['fab', 'html5']} size="6x" />
            <FontAwesomeIcon icon={['fab', 'css3-alt']} size="6x" />
            <FontAwesomeIcon icon={['fab', 'sass']} size="6x" />
          </div>
          <div className="icon-group">
            <FontAwesomeIcon icon={['fab', 'react']} size="6x" />
            <FontAwesomeIcon icon={['fab', 'node-js']} size="6x" />
            <FontAwesomeIcon icon={['fab', 'php']} size="6x" />
            <FontAwesomeIcon icon="database" size="6x" />
          </div>
        </div>
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  .titles {
    min-height: 200px;
    padding-left: 3rem;

    @media screen and (min-width: 1200px) {
      padding-left: 0;
    }
  }

  .title {
    font-size: 4rem;
    margin-bottom: 0;
    margin-top: 0;

    @media screen and (min-width: 1200px) {
      font-size: 5rem;
    }
  }

  .icons {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 5rem;

    svg {
      margin: 3rem;

      @media screen and (max-width: 800px) {
        margin: 1rem;
      }
    }
  }

  .icon-group {
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 50%;
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
