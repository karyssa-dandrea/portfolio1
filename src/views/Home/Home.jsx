import React from 'react';
import ryssa from '../../assets/ryssa.png';
import styles from './Home.css';
import karyssa from '../../assets/karyssa.gif';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.bio}>
        <p>
          <img src={karyssa} className={styles.img} alt="karyssa logo" />
          Hello, welcome! <br />
          I'm Karyssa Dandrea. <br />
          <em>
            I am a creator, collaborator and a full-stack Software Developer
            specializing in the front end.
          </em>{' '}
          I have a passion for creating intuitivee dynamic user experiences.
          Interested in the entire frontend and working on ambitious projects
          with others.
        </p>
      </div>
    </div>
  );
}
