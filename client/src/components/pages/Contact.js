import React from 'react';
import styled from 'styled-components';
import { mediumUp, largeUp } from '../../../util/media';

import googleMaps from '../../googleMaps';

const Contact = () => {
  googleMaps.init();

  return (
    <StyledContact>
      <p>I am currently open to new oppertunities.</p>
      <a
        href="BrandonPattersonResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Here is a copy of my resume
      </a>
      <div id="map" />
    </StyledContact>
  );
};

const StyledContact = styled.div`
  #map {
    color: black;
    position: relative;
    height: 440px;
    flex: 1;
    z-index: 1;

    @media ${mediumUp} {
      height: 800px;
      width: 100vw;
    }

    @media ${largeUp} {
      height: 100vh;
    }
  }
`;

export default Contact;
