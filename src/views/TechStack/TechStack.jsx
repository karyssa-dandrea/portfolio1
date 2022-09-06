import React from 'react';
import styles from './Tech.css';

export default function TechStack() {
  return (
    <div className={styles.tech}>
      <div className={styles.techsection}>
        <div className={styles.techrow}>
          <div className={styles.language}>
            <h2>
              {' '}
              <div className={styles.err}>Languages</div>
            </h2>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
          <div className={styles.frames}>
            <h2>
              <div className={styles.err}>Frameworks // Libraries</div>
            </h2>
            <p>React - my fave!</p>
            <p>Node.js</p>
            <p>Redux</p>
            <p>Express</p>
          </div>
          <div className={styles.data}>
            <h2>
              <div className={styles.err}>Database</div>
            </h2>
            <p>PostgreSQL</p>
          </div>
          <div className={styles.testing}>
            <h2>
              <div className={styles.err}>Testing</div>
            </h2>
            <p>QUnit</p>
            <p>Jest</p>
          </div>
        </div>
        <div className={styles.techrow}>
          <div className={styles.tools}>
            <h2>
              <div className={styles.err}> Tools</div>
            </h2>
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
            <h2>
              <div className={styles.err}>Practice</div>
            </h2>
            <p>Mob/Pair programming</p>
            <p>Rest API's</p>
            <p>TDD</p>
          </div>
        </div>
      </div>
    </div>
  );
}
