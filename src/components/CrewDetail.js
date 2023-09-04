/** @format */

import React from "react";
import styles from "./CrewDetail.module.css";
import { NavLink } from "react-router-dom";
import { GoDot, GoCircle } from "react-icons/go";

function CrewDetail(props) {
  return (
    <>
      <section className={styles.imgContainer}>
        <img
          src={props.imgSrc}
          alt={props.name}
          className={
            props.name === "DOUGLAS HURLEY"
              ? styles.douglasIMG
              : props.name === "MARK SHUTTLEWORTH"
              ? styles.markIMG
              : props.name === "VICTOR GLOVER"
              ? styles.victorIMG
              : props.name === "ANOUSHEH ANSARI"
              ? styles.anoushehIMG
              : styles
          }
        />
        <div className={styles.divider}></div>
      </section>

      <section className={styles.navLinks}>
        {/* <div className={styles.navLinkIcon}> */}
        <NavLink
          to="/crew/douglas/"
          className={({ isActive }) => (isActive ? styles.active : styles)}
        ></NavLink>
        {/* </div> */}

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
          <p>{props.position}</p>
        </div>
        <div className={styles.name}>
          {" "}
          <p>{props.name}</p>
        </div>
        <div className={styles.description}>
          <p>{props.description}</p>
        </div>
      </section>
    </>
  );
}

export default CrewDetail;
