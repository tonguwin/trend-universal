import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
    <li>
        <Link to="/issues">Issues</Link>
      </li>
      <li>
        <Link to="/about">Our Team</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
