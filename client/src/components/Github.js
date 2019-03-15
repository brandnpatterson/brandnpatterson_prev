import React from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { orange } from '../util/colors';
import { largeUp, mediumUp } from '../util/media';

const propTypes = {
  github: object.isRequired
};

const Github = () => {
  return (
    <StyledGithub>
      <div className="skills">
        <h2 className="title">Skills</h2>
        <div>
          <progress value="83" max="100" />
          <span>React</span>
        </div>
        <div>
          <progress value="83" max="100" />
          <span>JavaScript</span>
        </div>
        <div>
          <progress value="70" max="100" />
          <span>HTML</span>
        </div>
        <div>
          <progress value="70" max="100" />
          <span>CSS</span>
        </div>
        <div>
          <progress value="40" max="100" />
          <span>Node</span>
        </div>
      </div>
      <div className="github-stats">
        <h2 className="title">
          <span>Github</span> -{' '}
          <a
            style={{ color: orange }}
            href="https://github.com/brandnpatterson"
            target="_blank"
            rel="noopener noreferrer"
          >
            brandnpatterson
          </a>
        </h2>
        <img
          className="github-stats-img"
          src="https://ghchart.rshah.org/329AD1/brandnpatterson"
          alt="Brandon's Github chart"
        />
      </div>
    </StyledGithub>
  );
};

Github.propTypes = propTypes;

const StyledGithub = styled.div`
  .skills span {
    color: #fff;
    font-size: 1rem;
    font-weight: bolder;
    left: 1rem;
    position: relative;
    top: -1.8rem;
  }

  progress {
    background-color: #f3f3f3;
    border: 0;
    height: 2rem;
    width: 100%;
  }

  progress::-webkit-progress-bar {
    background-color: #e0eaf0;
  }

  progress::-webkit-progress-value {
    background-color: #287ba7;
  }

  progress::-moz-progress-bar {
    background-color: #287ba7;
  }

  .title {
    font-size: 1.25rem;

    @media ${mediumUp} {
      font-size: 2rem;
    }
  }

  .github-stats-img {
    margin-bottom: 2rem;
    width: 100%;

    @media ${mediumUp} {
      width: 80%;
    }

    @media ${largeUp} {
      width: 65%;
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
