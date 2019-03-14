import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <a
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
  height: 1rem;
  padding: 2rem;
`;

export default Footer;
