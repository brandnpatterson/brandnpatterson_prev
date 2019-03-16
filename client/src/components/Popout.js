import React, { useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { textColor, navy } from '../util/colors';

const Popout = () => {
  const [isHidden, setIsHidden] = useState(true);

  function toggleIsHidden() {
    setIsHidden(!isHidden);
  }

  return (
    <StyledPopout>
      <button onClick={toggleIsHidden} className="tab">
        {isHidden ? (
          <FontAwesomeIcon icon="angle-left" size="2x" />
        ) : (
          <FontAwesomeIcon icon="angle-right" size="2x" />
        )}
      </button>
      <ul className={'popout ' + (isHidden ? 'hidden' : '')}>
        <li>
          <a
            href="https://linkedin.com/in/brandnpatterson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/brandnpatterson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
          </a>
        </li>
        <li>
          <a href="tel:979-236-4789">
            <FontAwesomeIcon icon="phone" size="3x" />
          </a>
        </li>
        <li>
          <a href="mailto:brandnpatterson@gmail.com">
            <FontAwesomeIcon icon="envelope" size="3x" />
          </a>
        </li>
      </ul>
    </StyledPopout>
  );
};

const StyledPopout = styled.div`
  position: absolute;
  right: 0;
  top: 7rem;

  .tab {
    background: ${textColor};
    border: 0;
    height: 3rem;
    position: absolute;
    left: -3rem;
    top: 1.1rem;
    width: 3rem;
  }

  .popout {
    padding-left: 1rem;
    transition: all 0.5s;
    width: 5rem;
  }

  .popout.hidden {
    padding: 0;
    width: 0;
  }

  .fa-angle-left,
  .fa-angle-right {
    height: 1.85rem;
  }

  .fa-angle-left > path,
  .fa-angle-right {
    color: ${navy};
  }

  li {
    margin: 1rem;
  }
`;

export default Popout;
