import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Github from '../components/Github';

import { orange, surf } from '../util/colors';
import { mediumUp, smallOnly } from '../util/media';

const About = () => {
  return (
    <Fragment>
      <StyledAbout>
        <div className='about-me'>
          <div className='about-me-image-wrap'>
            <img
              className='about-me-image'
              src='images/about-me.jpg'
              alt='Brandon Patterson'
            />
          </div>
          <div className='about-me-text'>
            <h1 className='title'>A little bit about me</h1>
            <p className='about-me-paragraph'>
              I'm a{' '}
              <Link
                to='/work'
                onClick={() => window.scrollTo(0, 0)}
                style={{ color: orange }}
              >
                Developer
              </Link>{' '}
              at Square 205. I work remotely in Houston, Texas and I have
              experience building User Interfaces for global companies. I create
              websites and single page applications that are responsive,
              accessibility compliant, and aesthetically pleasing. I enjoy using
              the latest JavaScript features and libraries such as ES6, Webpack,
              Babel, React, and React Native. When I’m not coding, I like to travel, spend
              time with my family, and play video games like{' '}
              <Link
                to='/league'
                onClick={() => window.scrollTo(0, 0)}
                style={{ color: surf, textDecoration: 'underline' }}
              >
                League of Legends
              </Link>
              .
            </p>
          </div>
        </div>
        <Github />
      </StyledAbout>
    </Fragment>
  );
};

const StyledAbout = styled.div`
  margin: 0 auto;
  max-width: 60rem;

  .title {
    @media ${mediumUp} {
      margin-top: 0;
    }
  }

  .about-me {
    display: flex;
    flex-direction: column;

    @media ${mediumUp} {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 auto 6rem;
    }
  }

  .about-me-image-wrap {
    min-height: 25rem;
    min-width: 19.25rem;
    position: relative;
  }

  .about-me-image {
    bottom: 0;
    left: 0;
    margin: 0 auto;
    max-height: 25rem;
    max-width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    vertical-align: middle;
  }

  .about-me-text {
    margin: 0 auto;
    max-width: 30rem;
    padding: 2rem 0;

    @media ${mediumUp} {
      padding: 0;
      width: 50%;
    }
  }

  .about-me-text h1 {
    color: ${surf};
    font-size: 1.5rem;
    letter-spacing: 0.0625rem;

    @media ${mediumUp} {
      font-size: 2rem;
    }
  }

  .about-me-paragraph {
    line-height: 1.75rem;

    @media ${smallOnly} {
      max-width: 25rem;
    }
  }
`;

export default About;
