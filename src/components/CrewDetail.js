/** @format */

import React from "react";
import styles from "./CrewDetail.module.css";
import { NavLink } from "react-router-dom";
import { GoDot } from "react-icons/go";

function CrewDetail(props) {
  return (
    <>
      <section className={styles.imgContainer}>
        <img src={props.imgSrc} alt={props.name} />
        <div className={styles.divider}></div>
      </section>

      <section className={styles.navLinks}>
        <NavLink to="/crew/douglas/">
          <GoDot />
        </NavLink>
        <NavLink to="/crew/mark/">
          <GoDot />
        </NavLink>
        <NavLink to="/crew/victor/">
          <GoDot />
        </NavLink>
        <NavLink to="/crew/anousheh">
          <GoDot />
        </NavLink>
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
