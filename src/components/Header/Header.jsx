import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/tech">Tech Stack</NavLink>
    </div>
  );
}
