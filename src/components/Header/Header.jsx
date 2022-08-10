import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="/about">About</Link>
      <Link to="/tech">Tech Stack</Link>
    </div>
  );
}
