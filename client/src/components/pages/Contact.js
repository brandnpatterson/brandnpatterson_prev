import React, { useEffect } from 'react';
import styled from 'styled-components';
import { mediumUp } from '../../../util/media';

import googleMaps from '../../googleMaps';

const Contact = () => {
  useEffect(() => {
    googleMaps.init({ API_KEY: 'AIzaSyDq9D2VxihS-3kpTKOagpBB4IbJ8q1NI4w' });
  });

  return (
    <StyledContact>
      <a
        href="BrandonPattersonResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Here is a copy of my resume
      </a>
      <p>
        I am located in the Houston area and I'm currently open to new
        oppertunities.
      </p>
      <div id="map" />
    </StyledContact>
  );
};

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;

  #map {
    color: black;
    position: relative;
    height: 440px;
    flex: 1;
    z-index: 1;

    @media ${mediumUp} {
      height: 800px;
      max-width: 100%;
    }
  }
`;

export default Contact;
