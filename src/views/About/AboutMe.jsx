import React from 'react';
import me from '../../assets/me.jpg';
import styles from './About.css';
import witch from '../../assets/witch.jpeg';
import Spotify from 'react-spotify-embed';

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutbio}>
        <div className={styles.gridcontainer}>
          <img src={me} className={styles.selfie} alt="selfie" />
          <div className={styles.grid1}>
            <p>
              Hello! My name is Karyssa and I enjoy creating things that live on
              the web. My interest in web development started back in 2014 when
              I started a job at a watch company where I got introduced to HTML
              and CSS. I loved being able to create something and see it come to
              life and wanted more control over the process. I also received my
              Certificate in Commercial Music in 2020, which has allowed me to
              learn and navigate various software. I love to learn and create!
            </p>
            <p>
              Fast-forward to today, and I am now a Full Stack Software
              Developer! Although I specialize in the Front End. My main focus
              these days is building accessible, beautiful and user friendly
              digital experiences. Let's work together!
            </p>
          </div>
          <div className={styles.grid2}>
            <h3> Currently Reading:</h3>
            <img src={witch} className={styles.book} alt="image of book" />
          </div>
          <div className={styles.grid3}>
            <h3> Favorites to Code to:</h3>
            <div className={styles.spotify}>
              <Spotify link="https://open.spotify.com/playlist/6tMR6bBpetCK0mHP5WfTwF?si=f379312a27b744f2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
