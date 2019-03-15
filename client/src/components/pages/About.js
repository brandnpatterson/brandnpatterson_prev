import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Summoner from '../Summoner';

import { orange, surf } from '../../util/colors';
import { mediumUp } from '../../util/media';

const About = () => {
  return (
    <Fragment>
      <StyledAbout>
        <div className="about-me">
          <img src="images/about-me.jpg" alt="Brandon Patterson" />
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
            <p className="about-me-paragraph">
              As a fan of League of Legends and in no way affiliated, below I've
              used the Riot API to display the top 10 champions that i've
              played. Feel free to search for your account if you have one!
            </p>
          </div>
        </div>
        <Summoner />
      </StyledAbout>
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
      margin-bottom: 10rem;
    }

    img {
      max-height: 20rem;
      max-width: 100%;
      width: 20rem;

      @media ${mediumUp} {
        max-height: 25rem;
        max-width: inherit;
        width: 30rem;
      }
    }

    .about-me-text {
      padding: 2rem 0;

      @media ${mediumUp} {
        padding: 0 2rem 2rem;
        width: 45%;
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
