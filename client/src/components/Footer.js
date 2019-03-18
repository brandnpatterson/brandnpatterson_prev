import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-icons">
        <a
          className="footer-copyright-wrap"
          href="https://linkedin.com/in/brandnpatterson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
        </a>
        <a
          className="footer-copyright-wrap"
          href="https://github.com/brandnpatterson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
        </a>
        <a
          className="footer-copyright-wrap"
          href="mailto:brandnpatterson@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="envelope" size="2x" />
        </a>
        <a
          className="footer-copyright-wrap"
          href="tel:979-236-4789"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="phone" size="2x" />
        </a>
      </div>
      <a
        className="footer-copyright-wrap"
        href="https://github.com/brandnpatterson"
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy; {new Date().getFullYear()} Brandon Patterson
      </a>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: rgba(0, 0, 0, 0.2);

  .footer-icons {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    padding: 2rem 2rem 0;
    width: 20rem;
  }

  .footer-copyright-wrap {
    display: flex;
    padding: 1rem;
    width: 100%;
  }
`;

export default Footer;
