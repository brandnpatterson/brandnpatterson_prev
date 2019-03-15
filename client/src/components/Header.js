import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { boxShadow, navy, surf, textHoverColor } from '../util/colors';
import { openSans } from '../util/fonts';

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
        {/* <li>
          <NavLink to="/blog">Blog</NavLink>
        </li> */}
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  background: ${navy};
  box-shadow: ${boxShadow};
  margin-bottom: 5rem;
  width: 100vw;

  .active {
    border-bottom: 4px solid ${surf};
    color: ${surf};
    min-width: 5rem;
  }

  ul {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 900px;
    padding: 0 2rem;
  }

  li {
    font-family: ${openSans};
    min-width: 5rem;
  }

  a {
    display: block;
    font-size: 1rem;
    min-width: 3rem;
    padding: 1rem 0 0.75rem;
    text-align: center;

    &:hover {
      color: ${textHoverColor};
    }
  }
`;

export default Header;
