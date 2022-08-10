import React from 'react';

export default function AboutMe() {
  return (
    <div className="about">
      <img src={me} className={styles.me} alt="selfie" />
      <div className="bio">
        <p>
          Hello, welcome! <br />
          I'm <strong>Karyssa Dandrea</strong>. <br />
          I'm a full stack software developer specializing in the front end. I
          love to create beautiful digital and user experiences.
        </p>
      </div>
    </div>
  );
}
