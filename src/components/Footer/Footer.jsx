import React from 'react';
import styles from './Footer.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a
        target="_blank"
        className="emailink"
        href="mailto:karyssadandrea@gmail.com?subject=Karyssa"
      >
        <div className={styles.email}>Email</div>
      </a>
      <a
        href="https://www.linkedin.com/in/karyssa-dandrea/"
        target="_blank"
        className="linkedin"
      >
        <div className={styles.linkd}>LinkedIn </div>
      </a>
      <a
        href="https://github.com/karyssa-dandrea"
        target="_blank"
        className="github"
      >
        <div className={styles.git}>Github </div>
      </a>
    </div>
  );
}
