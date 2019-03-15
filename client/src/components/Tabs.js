import React from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';

import { boxShadow, cardColor, surf } from '../util/colors';
import { mediumUp } from '../util/media';

const propTypes = {
  children: object.isRequired
};

const Tabs = props => {
  return <StyledTabs>{props.children}</StyledTabs>;
};

const StyledTabs = styled.div`
  @media ${mediumUp} {
    background: ${cardColor};
    border-radius: 5px;
    box-shadow: ${boxShadow};
    padding: 2rem;
  }

  .interests-button {
    background: ${surf};
    border: 1px solid ${surf};
    padding: 1rem;
  }

  .interests {
    margin: 0;
    width: 1rem;
  }

  .tabs-header-buttons {
    display: flex;
    justify-content: space-around;
  }
`;

Tabs.propTypes = propTypes;

export default Tabs;
