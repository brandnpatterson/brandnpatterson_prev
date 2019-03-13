import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/summoner">Summoner</Link>
      </li>
      <li>
        <Link to="/github">Github</Link>
      </li>
      <li>
        <Link to="/Blog">Blog</Link>
      </li>
    </ul>
  );
};

export default Header;
