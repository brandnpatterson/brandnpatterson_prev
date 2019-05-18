import React, { useEffect } from 'react';
import { bool, func, object } from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { boxShadow, navy, surf, textHoverColor } from '../util/colors';
import { openSans } from '../util/fonts';
import { smallOnly } from '../util/media';

const propTypes = {
  isFocusing: bool.isRequired,
  setIsFocusing: func.isRequired,
  workNavRef: object.isRequired
};

const Header = ({ isFocusing, setIsFocusing, workNavRef }) => {
  useEffect(() => {
    if (isFocusing) {
      workNavRef.current.children[0].focus();
    }

    return () => {
      setIsFocusing(false);
    };
  });

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
        <li ref={workNavRef}>
          <NavLink to="/work">Work</NavLink>
        </li>
        <li>
          <NavLink to="/league">League</NavLink>
        </li>
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
    border-bottom: 0.25rem solid ${surf};
    color: ${surf};
    min-width: 5rem;
  }

  ul {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 59.38rem;
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

    @media ${smallOnly} {
      font-size: 0.75rem;
      min-width: 4rem;
    }
  }
`;

Header.propTypes = propTypes;

export default Header;
