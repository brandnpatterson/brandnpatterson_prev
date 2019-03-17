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
      <p>
        * In no way associated or affiliated with League of Legends or Riot
        Games.
      </p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: rgba(0, 0, 0, 0.2);
  height: 2rem;
  padding: 2rem;

  p {
    font-size: 0.85rem;
  }
`;

export default Footer;
