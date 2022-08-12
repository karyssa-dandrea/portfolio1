import React from 'react';
import me from '../../assets/me.jpg';
import styles from './About.css';

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <img src={me} className={styles.img} alt="selfie" />
      <div className={styles.aboutbio}>
        <p>
          Thank you for being here! I am a software developer currently residing
          in Visalia, CA. I got into software development in 2014 when I started
          a job at a watch company doing customer service. Shortly after I got
          promoted to be a Front End Developer and started using integrated HTML
          and CSS. I loved being able to create something and see it come to
          life and wanted more control over the process. I also received my
          certificate in Commercial Music, which has allowed me to learn how to
          use various software. I love learning and creating which has brought
          me here.
        </p>
        <p>
          I want to use software development to focus on user experience, use my
          creativity, and it is just so much fun! I also love that software can
          make a difference for others. I would love to work with you, or be
          apart of your team!
        </p>
      </div>
    </div>
  );
}
