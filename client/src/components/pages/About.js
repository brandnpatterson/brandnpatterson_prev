import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Github from '../Github';

import { orange, surf } from '../../util/colors';
import { mediumUp } from '../../util/media';

const About = () => {
  return (
    <Fragment>
      <StyledAbout>
        <div className="about-me">
          <div className="about-me-image-wrap">
            <img
              className="about-me-image"
              src="images/about-me.jpg"
              alt="Brandon Patterson"
            />
          </div>
          <div className="about-me-text">
            <h1 className="title">A little bit about me</h1>
            <p className="about-me-paragraph">
              I'm a{' '}
              <Link to="/projects" style={{ color: orange }}>
                Front End Developer
              </Link>{' '}
              with experience building User Interfaces for global companies.
              I've created websites that support clients at a large scale and
              valuing WCAG accessibility standards. I also have experience
              building custom blog solutions with React and the Wordpress API. I
              enjoy creating reusable, scalable tools and build systems that can
              be utilized by other developers.
            </p>
            <div className="about-me-paragraph">
              I hold a Bachelors of Music in Composition and Technology from
              Oral Roberts University. I'm a self taught developer with a
              passion for all things programming and a vision for creating
              outstanding User Interfaces.
            </div>
          </div>
        </div>
      </StyledAbout>
      <Github />
    </Fragment>
  );
};

const StyledAbout = styled.div`
  .title {
    @media ${mediumUp} {
      margin-top: 0;
    }
  }

  .about-me {
    display: flex;
    flex-direction: column;

    @media ${mediumUp} {
      flex-direction: row;
      justify-content: space-around;
      margin-bottom: 2rem;
    }

    .about-me-image-wrap {
      min-height: 320px;
      min-width: 342.81px;
      position: relative;

      @media ${mediumUp} {
        min-height: 399.98px;
        min-width: 428.52px;
      }
    }

    .about-me-image {
      margin: 0 auto;
      max-height: 20rem;
      max-width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      vertical-align: middle;

      @media ${mediumUp} {
        margin: inherit;
        max-height: 25rem;
      }
    }

    .about-me-text {
      padding: 2rem 0;

      @media ${mediumUp} {
        padding: 0;
        width: 50%;
      }

      h1 {
        color: ${surf};
        font-size: 1.5rem;
        letter-spacing: 1px;

        @media ${mediumUp} {
          font-size: 2rem;
        }
      }
    }

    .about-me-paragraph {
      line-height: 1.75rem;
    }
  }
`;

export default About;
