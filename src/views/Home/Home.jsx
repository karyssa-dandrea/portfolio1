import React from 'react';
import ryssa from '../../assets/ryssa.png';
import styles from './Home.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.bio}>
        <p>
          <img src={ryssa} className={styles.img} alt="karyssa logo" />
          Hello, welcome! <br />
          I'm Karyssa Dandrea. <br />
          I'm a full stack software developer specializing in the front end. I
          love to create beautiful digital and user experiences.
        </p>
      </div>
    </div>
  );
}
