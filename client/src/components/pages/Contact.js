import React, { useEffect } from 'react';
import styled from 'styled-components';

import { surf } from '../../../util/colors';
import { mediumUp } from '../../../util/media';

import googleMaps from '../../googleMaps';

const Contact = () => {
  useEffect(() => {
    googleMaps.init({
      API_KEY: 'AIzaSyDq9D2VxihS-3kpTKOagpBB4IbJ8q1NI4w'
    });
  }, []);

  return (
    <StyledContact>
      <div className="contact-header">
        <a className="contact-info" href="tel:979-236-4789">
          Phone number: 979-236-4789
        </a>
        <a className="contact-info" href="mailto:brandnpatterson@gmail.com">
          E-mail: brandnpatterson@gmail.com
        </a>
        <a
          className="contact-info"
          href="https://github.com/brandnpatterson"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github: brandnpatterson
        </a>
      </div>
      <div className="contact-wrap">
        <div className="contact-content">
          <a
            href="BrandonPattersonResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="resume-image"
              src="images/resume.png"
              alt="Resume"
            />
          </a>
        </div>
        <div id="map" />
      </div>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  .contact-header {
    display: flex;
    flex-direction: column;

    .contact-info {
      color: ${surf};
      padding: 0 0 2rem;
      width: 17rem;
    }
  }

  .contact-wrap {
    display: flex;
    flex-direction: column;

    @media ${mediumUp} {
      flex-direction: row;
    }
  }

  .contact-content {
    margin-bottom: 2rem;

    @media ${mediumUp} {
      margin-bottom: 0;
      padding-right: 3rem;
      width: 45%;
    }
  }

  .resume-image {
    display: block;
    margin: 0 auto;
    max-width: 100%;

    @media ${mediumUp} {
      height: 760px;
    }
  }

  #map {
    color: black;
    position: relative;
    height: 440px;
    flex: 1;
    z-index: 1;

    @media ${mediumUp} {
      height: 760px;
    }
  }
`;

export default Contact;
