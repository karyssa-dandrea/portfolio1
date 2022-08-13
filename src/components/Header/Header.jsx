import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <NavLink to="/">
        <div className={styles.home}>Home</div>
      </NavLink>
      <NavLink to="/about">
        <div className={styles.about}>About</div>
      </NavLink>
      <NavLink to="/tech">
        <div className={styles.tech}>Tech Stack</div>
      </NavLink>
    </div>
  );
}
