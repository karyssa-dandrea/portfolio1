import React from 'react';
import styles from './Tech.css';

export default function TechStack() {
  return (
    <div className={styles.tech}>
      <div className={styles.techsection}>
        <div className={styles.techleft}>
          <div className={styles.techlanguages}>
            <h2 className={styles.techheader}>Languages</h2>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
          <div className={styles.techenvironments}>
            <h2 className={styles.techheader}>Frameworks &amp; Libraries</h2>
            <p>React</p>
            <p>Node.js</p>
            <p>Express</p>
            <p>Redux</p>
          </div>
        </div>
        <div className={styles.techcenter}>
          <div className={styles.techdatabases}>
            <h2 className={styles.techheader}>Database</h2>
            <p>PostgreSQL</p>
          </div>
          <div className={styles.techtools}>
            <h2 className={styles.techheader}>Tools</h2>
            <p>Miroboard</p>
            <p>VSCode</p>
            <p>Netlify</p>
            <p>Heroku</p>
            <p>Github</p>
            <p>Supabase</p>
            <p>Postman</p>
            <p>Beekeeper Studio</p>
          </div>
        </div>
        <div className={styles.techright}>
          <div className={styles.techtesting}>
            <h2 className={styles.techheader}>Testing</h2>
            <p>QUnit</p>
            <p>Jest</p>
          </div>
          <div className={styles.techpractices}>
            <h2 className={styles.techheader}>Practice</h2>
            <p>Mob/Pair Programming</p>
            <p>TDD</p>
            <p>REST API</p>
          </div>
        </div>
      </div>
    </div>
  );
}
