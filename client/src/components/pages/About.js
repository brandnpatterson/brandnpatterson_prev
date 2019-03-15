import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Summoner from '../Summoner';
import Tabs from '../Tabs';

import { orange, surf } from '../../util/colors';
import { mediumUp } from '../../util/media';

const About = () => {
  return (
    <Fragment>
      <StyledAbout>
        <div className="about-me">
          <img
            style={{ maxWidth: '400px' }}
            src="images/about-me.jpg"
            alt="Brandon Patterson"
          />
          <div className="about-me-text">
            <h1>A little bit about me</h1>
            <p className="about-me-paragraph">
              I'm a{' '}
              <Link to="/projects" style={{ color: orange }}>
                Front End Developer
              </Link>{' '}
              with experience building User Interfaces for global companies.
              I've created websites that support clients at a large scale
              valuing WCAG accessibility standards. I also have experience
              building custom blog solutions with React and the Wordpress API. I
              enjoy creating reusable, scalable tools and build systems that can
              be utilized by other developers.
            </p>
            <p className="about-me-paragraph">
              I'm a fan of League of Legends and below I've used the Riot API to
              display the top 10 champions that i've played. Feel free to search
              for your account if you have one!
            </p>
          </div>
        </div>
        <Tabs>
          <Summoner />
        </Tabs>
      </StyledAbout>
    </Fragment>
  );
};

const StyledAbout = styled.div`
  .about-me {
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1140px) {
      flex-direction: row;
      justify-content: space-around;
    }

    img {
      max-height: 20rem;
      width: 20rem;

      @media ${mediumUp} {
        max-height: 25rem;
        width: 30rem;
      }
    }

    .about-me-text {
      padding: 2rem 0;

      @media ${mediumUp} {
        padding: 2rem;
      }
      h1 {
        color: ${surf};
        font-size: 1.5rem;
        letter-spacing: 4px;

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
