import React from 'react';
import styled from 'styled-components';
import { black, orange, surf } from '../util/colors';
import { mediumUp } from '../util/media';

// import googleMaps from '../googleMaps';

const Contact = () => {
  // useEffect(() => {
  //   googleMaps.init({
  //     API_KEY: 'AIzaSyDq9D2VxihS-3kpTKOagpBB4IbJ8q1NI4w'
  //   });
  // }, []);

  return (
    <StyledContact>
      <h1 className="heading-title">Contact Me</h1>
      <div className="contact-header">
        <p className="contact-info">
          Phone number: <a href="tel:979-236-4789">979-236-4789</a>
        </p>
        <p className="contact-info">
          E-mail:{' '}
          <a href="mailto:brandnpatterson@gmail.com">
            brandnpatterson@gmail.com
          </a>
        </p>

        <p className="contact-info">
          Github:{' '}
          <a
            href="https://github.com/brandnpatterson"
            target="_blank"
            rel="noopener noreferrer"
          >
            brandnpatterson
          </a>
        </p>
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
              src="images/BrandonPattersonResume.png"
              alt="Brandon Patterson's Resume"
            />
          </a>
        </div>
        <div id="map" className="map" />
      </div>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  .heading-title {
    color: ${surf};
    letter-spacing: 0.0625rem;
    padding: 2rem 0;
    padding-top: 0;
  }

  .contact-header {
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;

    @media ${mediumUp} {
      flex-direction: row;
      justify-content: space-between;
    }

    .contact-info {
      color: ${orange};
      padding: 0;
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
      width: 50%;
    }
  }

  .resume-image {
    display: block;
    max-width: 100%;

    @media ${mediumUp} {
      height: 47.5rem;
    }
  }

  .map {
    color: ${black};
    flex: 1;
    height: 27.5rem;
    position: relative;
    z-index: 1;

    @media ${mediumUp} {
      height: 47.5rem;
    }
  }
`;

export default Contact;
