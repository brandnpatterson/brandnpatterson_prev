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
        This website isn’t endorsed by Riot Games and doesn’t reflect the views
        or opinions of Riot Games or anyone officially involved in producing or
        managing League of Legends. League of Legends and Riot Games are
        trademarks or registered trademarks of Riot Games, Inc. League of
        Legends © Riot Games, Inc.
      </p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: rgba(0, 0, 0, 0.2);
  padding: 2rem 2rem 1rem;

  p {
    font-size: 0.85rem;
  }
`;

export default Footer;
