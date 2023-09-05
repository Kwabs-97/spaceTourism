/** @format */

import React from "react";
import douglasIMG from "../assets/crew/image-douglas-hurley.webp";
import styles from "./CrewHome.module.css";
import { NavLink } from "react-router-dom";
function CrewHome() {
  const douglasContent = {
    imgSrc: douglasIMG,
    position: "COMMANDER",
    name: "DOUGLAS HURLEY",
    description:
      " Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  };

  return (
    <div className={styles.crewContainer}>
      <header className={styles.header}>
        <div className={styles.background}></div>
        <p>
          <span>02</span>
          MEET YOUR CREW
        </p>
      </header>
      <div className={styles.crew}>
        <section className={styles.imgContainer}>
          <img
            src={douglasContent.imgSrc}
            alt={douglasContent.name}
            className={styles.douglasIMG}
          />
          <div className={styles.divider}></div>
        </section>

        <section className={styles.navLinks}>
          <NavLink
            to="/crew/"
            className={({ isActive }) => (isActive ? styles.active : styles)}
          ></NavLink>

          <NavLink
            to="/crew/mark/"
            className={({ isActive }) => (isActive ? styles.active : styles)}
          ></NavLink>

          <NavLink
            to="/crew/victor/"
            className={({ isActive }) => (isActive ? styles.active : styles)}
          ></NavLink>

          <NavLink
            to="/crew/anousheh"
            className={({ isActive }) => (isActive ? styles.active : styles)}
          ></NavLink>
        </section>
        <section className={styles.about}>
          <div className={styles.position}>
            <p>{douglasContent.position}</p>
          </div>
          <div className={styles.name}>
            {" "}
            <p>{douglasContent.name}</p>
          </div>
          <div className={styles.description}>
            <p>{douglasContent.description}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CrewHome;
