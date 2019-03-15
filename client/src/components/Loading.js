import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loading = () => {
  return (
    <StyledLoading>
      <FontAwesomeIcon icon="spinner" />
    </StyledLoading>
  );
};

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .fa-spinner {
    animation: spinner 1s linear infinite;
  }
`;

export default Loading;