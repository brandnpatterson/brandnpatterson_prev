import React from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { orange } from '../util/colors';
import { mediumUp } from '../util/media';

const propTypes = {
  github: object
};

const Github = () => {
  return (
    <StyledGithub>
      <a
        href="https://github.com/brandnpatterson"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="title">
          <span>Github</span> -{' '}
          <span style={{ color: orange }}>brandnpatterson</span>
        </h2>{' '}
        <img
          className="github-stats-img"
          src="https://ghchart.rshah.org/329AD1/brandnpatterson"
          alt="Brandon's Github chart"
        />
      </a>
    </StyledGithub>
  );
};

Github.propTypes = propTypes;

const StyledGithub = styled.div`
  margin-bottom: 2rem;

  .title {
    font-size: 1.25rem;

    @media ${mediumUp} {
      font-size: 2rem;
    }
  }

  .github-stats-img {
    width: 100%;

    @media ${mediumUp} {
      width: 55rem;
    }
  }
`;

const mapStateToProps = state => ({
  github: state.github
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Github);
