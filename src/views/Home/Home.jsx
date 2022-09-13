import React from 'react';
import styles from './Home.css';
import karyssa from '../../assets/karyssa.gif';
import codingg from '../../assets/codingg.png';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.bio}>
        <img src={karyssa} className={styles.ryssa} alt="karyssa logo" />
        <p>
          Hello, welcome! <br />
          I'm Karyssa Dandrea. <br />
          <em>
            I am a creator, collaborator and a full-stack Software Developer
            specializing in the front end.
          </em>{' '}
          I have a passion for creating intuitive and dynamic user experiences.
          I am interested in working on ambitious projects with others!
        </p>
        <img src={codingg} className={styles.coding} alt="coding quote" />
      </div>
    </div>
  );
}
