import React from 'react';
import unspoken from '../../assets/unspoken.jpeg';
import styles from './Projects.css';

export default function ProjectList() {
  return (
    <div className={styles.projectlist}>
      <h1 className={styles.gotchib}>gotchi bb</h1>
      <img
        src="https://i.postimg.cc/QFRxTtc8/pet4.png"
        className={styles.gotchi}
      />
      <div className={styles.foto}>
        <h1>Foto.</h1>
        <h3>
          <i>React, Supabase, Netlify, CSS</i>
        </h3>
        <p>
          Foto is an online application that allows users to upload photos into
          private or public albums. Public album photos are randomized across
          the home page, while private albums are password protected. I created
          the functionality to upload photos into albums. I also organized the
          file structure to maintain navigable code. This was done in a 4 day
          sprint with a team of 4.
        </p>
      </div>
      <div className={styles.unspoken}>
        <img src={unspoken} className={styles.unphoto} alt="unspoken image" />
        <h3>
          <i>React, Netlify, Supabase, CSS</i>
        </h3>
        <p>
          Unspoken is an online platform for users to share stories for others
          to connect with a lo-fi vibe. This is a React app utilizing Supabase
          for the backend. This was made in a 4 day sprint with a team of 4. I
          wrote the presentational components and refactored for cleaner code
          and readability. I also took the lead in CSS and adding music to our
          app.
        </p>
      </div>
    </div>
  );
}
