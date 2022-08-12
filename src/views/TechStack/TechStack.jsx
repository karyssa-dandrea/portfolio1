import React from 'react';
import styles from './Tech.css';

export default function TechStack() {
  return (
    <div className={styles.tech}>
      <div className={styles.language}>
        <h3> Languages</h3>
        <p>JavaScript</p>
        <p>HTML</p>
        <p>CSS</p>
      </div>
      <div className={styles.frames}>
        <h3>Frameworks // Libraries</h3>
        <p>React - my fave!</p>
        <p>Node.js</p>
        <p>Redux</p>
        <p>Express</p>
      </div>
      <div className={styles.data}>
        <h3>Database</h3>
        <p>PostgreSQL</p>
      </div>
      <div className={styles.testing}>
        <h3>Testing</h3>
        <p>QUnit</p>
        <p>Jest</p>
      </div>
      <div className={styles.tools}>
        <h3> Tools</h3>
        <p>Miroboard</p>
        <p>VSCode</p>
        <p>Netlify</p>
        <p>Heroku</p>
        <p>Postman</p>
        <p>Supabase</p>
        <p>Github</p>
        <p>Beekeeper Studio</p>
      </div>
      <div className={styles.dev}>
        <h3>Practice</h3>
        <p>Mob/Pair programming</p>
        <p>Rest API's</p>
        <p>TDD</p>
      </div>
    </div>
  );
}
