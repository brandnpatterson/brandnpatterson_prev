import React from 'react';
import styled from 'styled-components';
import { surf } from '../../../util/colors';
import { mediumUp } from '../../../util/media';

const About = () => {
  return (
    <StyledAbout>
      <img
        style={{ maxWidth: '400px' }}
        src="images/about-me.jpg"
        alt="Brandon Patterson"
      />
      <div className="about-me-text">
        <h1>About me</h1>
        <p>
          I am a <span style={{ color: '#ff8800' }}>Web Developer</span>
        </p>
      </div>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 640px) {
    flex-direction: row;
  }

  img {
    max-height: 20rem;
    margin: 0 auto;
    width: 21rem;

    @media ${mediumUp} {
      max-height: 25rem;
      width: 30rem;
    }
  }

  .about-me-text {
    padding: 3rem;

    h1 {
      color: ${surf};
    }
  }
`;

export default About;
