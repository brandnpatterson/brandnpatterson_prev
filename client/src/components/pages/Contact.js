import React, { useEffect } from 'react';
import styled from 'styled-components';

import { surf } from '../../../util/colors';
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
        <code className="mock-code-anchor">{'<a>'}</code> Here is a copy of my
        resume <code className="mock-code-anchor">{'</a>'}</code>
      </a>
      <p>
        I'm located in the Houston area and I'm currently open to new
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

  .mock-code-anchor {
    color: ${surf};
    font-family: 'Sue Ellen Francisco', cursive;
    font-size: 3rem;
    font-style: italic;
  }
`;

export default Contact;
