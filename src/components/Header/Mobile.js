import React from 'react';
import { Link } from 'react-router-dom';

export default function Mobile() {
  return (
    <div className={styles.mobile}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to={resume} target="_blank">
            Resume
          </Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/tech">TechStack</Link>
        </li>
      </ul>
    </div>
  );
}
