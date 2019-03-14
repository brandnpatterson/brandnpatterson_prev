import React from 'react';
import styled from 'styled-components';
import { surf } from '../../../util/colors';

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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus hic
          tempora tempore consequuntur deleniti rerum provident quas aliquam
          velit explicabo fugit cumque numquam, ratione expedita aliquid
          doloribus, quod ut! Voluptate!
        </p>
      </div>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }

  img {
    max-height: 350px;

    @media screen and (min-width: 800px) {
      max-height: 400px;
      width: 500px;
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
