/** @format */

import styles from "./TechDetail.module.css";

import React from "react";
import { NavLink } from "react-router-dom";

function TechDetail(props) {
  return (
    <div className={styles.TechDetail}>
      <section className={styles.imgContainer}>
        <img
          src={props.img}
          alt={props.title}
          className={
            props.title === "LAUNCH VEHICLE"
              ? styles.launchIMG
              : props.title === "SPACEPORT"
              ? styles.spaceportIMG
              : props.title === "SPACE CAPSULE"
              ? styles.spaceCapsuleIMG
              : styles.imgSrc
          }
        />
      </section>
      <section className={styles.navLinks}>
        <NavLink
          to="/technology/vehicle"
          className={({ isActive }) => (isActive ? styles.active : styles)}
        >
          {" "}
          <p>1</p>
        </NavLink>
        {/* </div> */}

        <NavLink
          to="/technology/port"
          className={({ isActive }) => (isActive ? styles.active : styles)}
        >
          <p>2</p>
        </NavLink>

        <NavLink
          to="/technology/capsule"
          className={({ isActive }) => (isActive ? styles.active : styles)}
        >
          <p>3</p>
        </NavLink>
      </section>

      <section className={styles.about}>
        <div className={styles.heading}>
          <p>THE TERMINOLOGY ...</p>
        </div>
        <div className={styles.title}>
          <p>{props.title}</p>
        </div>
        <div className={styles.description}>
          <p>{props.about}</p>
        </div>
      </section>
    </div>
  );
}

export default TechDetail;
