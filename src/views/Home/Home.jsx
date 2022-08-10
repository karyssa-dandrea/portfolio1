import React from 'react';
import Retro from '../../assets/Retro.gif';
import styles from './Home.css';

export default function Home() {
  return (
    <div className="home">
      <img src={Retro} className={styles.img} alt="retro sparkles" />
    </div>
  );
}
