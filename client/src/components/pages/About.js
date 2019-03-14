import React, { Fragment } from 'react';
import styled from 'styled-components';

import Summoner from '../Summoner';

import { surf } from '../../../util/colors';
import { mediumUp } from '../../../util/media';

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
            <p>
              I'm a <span style={{ color: '#ff8800' }}>Web Developer.</span>{' '}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
              quidem aliquam consequuntur praesentium perferendis laboriosam
              veniam ducimus similique. Commodi nostrum quisquam suscipit vero
              quo asperiores. Exercitationem sint hic porro corporis. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Possimus quod
              hic tempora officia doloribus! Id, reiciendis iusto eum dicta
              maxime ipsa ipsam officiis consectetur! Nisi temporibus laborum
              illo reprehenderit porro.
            </p>
          </div>
        </div>
        <Summoner />
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
      padding: 2rem;

      h1 {
        color: ${surf};
        font-size: 1.5rem;

        @media ${mediumUp} {
          font-size: 2rem;
        }
      }
    }
  }
`;

export default About;
