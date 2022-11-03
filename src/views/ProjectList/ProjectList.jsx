import React from 'react';
import unspoken from '../../assets/unspoken.jpeg';
import styles from './Projects.css';

export default function ProjectList() {
  return (
    <div className={styles.projectlist}>
      <div className={styles.gotchibb}>
        <h1 className={styles.gotchib}>gotchi bb</h1>
        <img
          src="https://i.postimg.cc/QFRxTtc8/pet4.png"
          className={styles.gotchi}
        />
        <h3 className={styles.projecth}>
          <i>React, Express, PostgreSQL, Node NLP, Heroku, CSS</i>
        </h3>
        <div className="gotchilinks">
          <a
            href="https://github.com/Tamagotchi-Clone"
            target="_blank"
            alt="github repo"
            className={styles.projectlinks}
          >
            Code
          </a>
          |
          <a
            href="https://gotchi-bb.netlify.app"
            target="_blank"
            alt="deployed site"
            className={styles.projectlinks}
          >
            Site
          </a>
        </div>
        <p>
          <b>
            Gotchi bb is a full-stack CRUD app with a RESTful API that allows
            users to care for a virtual pet. Made in a 10-day sprint with a team
            of 4, I built reuseable components and created functionality to
            edit, bathe, feed and play with your pet. I also tested the
            funtionality using Jest and Supertest. I also took part in using an
            NLP to create a chatbot to talk to your cute new friend.{' '}
          </b>
        </p>
      </div>
      <div className={styles.foto}>
        <h1 className={styles.fotoh1}>Foto.</h1>
        <h3 className={styles.projecth}>
          <i>React, Supabase, Netlify, CSS</i>
        </h3>
        <div className="fotolinks">
          <a
            href="https://github.com/photo-app-placeholder"
            target="_blank"
            alt="github repo for foto"
            className={styles.projectlinks}
          >
            Code
          </a>
          |
          <a
            href="https://foto-app.netlify.app"
            target="_blank"
            alt="deployed foto site"
            className={styles.projectlinks}
          >
            Site
          </a>
        </div>
        <p>
          <b>
            Foto is an online application that allows users to upload photos
            into private or public albums. Public album photos are randomized
            across the home page, while private albums are password protected. I
            created the functionality to upload photos into albums, as well as
            to delete and add or edit a caption. I also organized the file
            structure to maintain navigable code. This was done in a 4 day
            sprint with a team of 4.
          </b>
        </p>
      </div>
      <div className={styles.unspoken}>
        <img src={unspoken} className={styles.unphoto} alt="unspoken image" />
        <h3 className={styles.projecth}>
          <i>React, Netlify, Supabase, CSS</i>
        </h3>
        <div className="unspokenlinks">
          <a
            href="https://github.com/unspoken-project"
            target="_blank"
            alt="github repo for unspoken"
            className={styles.projectlinks}
          >
            Code
          </a>
          |
          <a
            href="https://unspokenstories.netlify.app"
            target="_blank"
            alt="deployed unspoken site"
            className={styles.projectlinks}
          >
            Site
          </a>
        </div>
        <p>
          <b>
            Unspoken is an online platform for users to share stories for others
            to connect with a lo-fi vibe. This is a React app utilizing Supabase
            for the backend. This was made in a 4 day sprint with a team of 4. I
            create the functionality to post and edit any blogs. I wrote the
            presentational components and refactored for cleaner code and
            readability. I also took the lead in CSS and adding music to our
            app.
          </b>
        </p>
      </div>
    </div>
  );
}
