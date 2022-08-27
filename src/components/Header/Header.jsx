import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';
import resume from '../../assets/resume.png';

export default function Header() {
  return (
    <div className={styles.header}>
      <NavLink to="/">
        <div className={styles.home}>Home</div>
      </NavLink>
      <NavLink to="/about">
        <div className={styles.about}>About</div>
      </NavLink>
      <NavLink to={resume} target="_blank">
        <div className={styles.resume}>Resume</div>
      </NavLink>
      <NavLink to="/projects">
        <div className={styles.project}>Projects</div>
      </NavLink>
      <NavLink to="/tech">
        <div className={styles.tech}>Tech Stack</div>
      </NavLink>
    </div>
  );
}
