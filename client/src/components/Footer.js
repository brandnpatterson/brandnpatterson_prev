import React from 'react';

const Footer = () => {
  return (
    <footer style={{ maxWidth: '750px', margin: '0 auto' }}>
      <a
        href="https://github.com/brandnpatterson"
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy; {new Date().getFullYear()} Brandon Patterson
      </a>
    </footer>
  );
};

export default Footer;
