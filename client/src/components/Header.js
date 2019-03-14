import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { boxShadow, navy, surf, textHoverColor } from '../../util/colors';
import { openSans } from '../../util/fonts';

const Header = () => {
  return (
    <StyledHeader>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  box-shadow: ${boxShadow};
  background: ${navy};
  margin-bottom: 5rem;
  width: 100vw;

  .active {
    border-bottom: 4px solid ${surf};
    color: ${surf};
  }

  ul {
    display: flex;
    margin: 0 auto;
    max-width: 900px;
    padding-left: 0;
    justify-content: space-around;
  }

  li {
    font-family: ${openSans};
  }

  a {
    display: block;
    font-size: 1rem;
    padding: 1rem 0 0.75rem;
    min-width: 3rem;
    text-align: center;

    &:hover {
      color: ${textHoverColor};
    }
  }
`;

export default Header;
