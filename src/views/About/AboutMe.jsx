import React from 'react';
import me from '../../assets/me.jpg';
import styles from './About.css';
import witch from '../../assets/witch.jpeg';
import Spotify from 'react-spotify-embed';
import verity from '../../assets/verity.jpeg';
import tailwind2 from '../../assets/tailwind2.jpeg';

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutbio}>
        <img src={me} className={styles.selfie} alt="selfie" />

        <p>
          Hello! My name is Karyssa, and I enjoy creating things that live on
          the web. My interest in web development started back in 2014 when I
          started managing the website at a watch company. I was introduced to
          HTML and CSS and loved it! I loved being able to create something and
          see it come to life and wanted more control over the process. I also
          received my Certificate in Commercial Music in 2020, which has allowed
          me to learn and navigate various software. I love to learn and create!
        </p>
        <p>
          Fast-forward to today, and I am now a Full Stack Software Developer!
          My main focus these days is building accessible, beautiful and user
          friendly digital experiences. Let's work together!
        </p>
      </div>
      <div className={styles.fun}>
        <div className={styles.read}>
          <div className={styles.grid2}>
            <h3> Currently Reading:</h3>
            <img src={verity} className={styles.book} alt="image of book" />
          </div>
        </div>
        <div className={styles.grid2}>
          <h3> Currently obsessed with:</h3>

          <img src={tailwind2} className={styles.dogs} alt="image of shrek" />
        </div>
        <div className={styles.grid3}>
          <h3> Favorites to Code to:</h3>
          <div className={styles.spotify}>
            <Spotify link="https://open.spotify.com/playlist/3m1wqti1z7gAU7GCGNHyFc?si=e71e17f2f9d64288" />
          </div>
        </div>
      </div>
    </div>
  );
}
