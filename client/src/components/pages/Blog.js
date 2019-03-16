import React from 'react';
import styled from 'styled-components';
import { surf } from '../../util/colors';

const Blog = () => {
  return (
    <StyledBlog>
      <h1 className="heading-title">Blog</h1>
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

const StyledBlog = styled.div`
  .heading-title {
    color: ${surf};
    padding: 2rem 0;
    letter-spacing: 1.5px;
    padding-top: 0;
  }
`;

export default Blog;
