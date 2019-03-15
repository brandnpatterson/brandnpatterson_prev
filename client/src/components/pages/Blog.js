import React from 'react';
import styled from 'styled-components';

const Blog = () => {
  return (
    <StyledBlog>
      <a
        href="https://medium.com/@brandnpatterson"
        target="_blank"
        rel="noopener noreferrer"
      >
        You can find me on Medium
      </a>
    </StyledBlog>
  );
};

const StyledBlog = styled.div``;

export default Blog;
