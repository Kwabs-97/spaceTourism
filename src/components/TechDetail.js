/** @format */

import styles from "./TechDetail.module.css";

import React from "react";

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
      <section></section>

      <section></section>
    </div>
  );
}

export default TechDetail;
