/** @format */

import React from "react";
import styles from "./Destination.module.css";
import { NavLink } from "react-router-dom";
import planetIMG from "../assets/destination/image-moon.webp";

function Destination() {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <main className={styles.destination}>
        <div className={styles.header}>
          <p>
            <span>01</span>
            PICK YOUR DESTINATION
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src={planetIMG} alt="planetIMG" width={170} height={170} />
        </div>
        <section className={styles.about}>
          <div className={styles.linksContainer}>
            <ul className={styles.links}>
              <li>
                {" "}
                <NavLink>MOON</NavLink>
              </li>
              <li>
                {" "}
                <NavLink>MARS</NavLink>
              </li>
              <li>
                {" "}
                <NavLink>EUROPA</NavLink>
              </li>
              <li>
                {" "}
                <NavLink>TITAN</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.planetName}>
            <p> MOON</p>
          </div>
          <div className={styles.planetDescription}>
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing trip away to help
              regain perspective and come back refreshed. While you’re there, take in some history
              by visiting the Luna 2 and Apollo 11 landing sites.
            </p>
          </div>
        </section>
        <div className={styles.divider}></div>
        <footer className={styles.footer}>
          <div className={styles.avgDistance}>
            <span>AVG. DISTANCE</span>
            <h3>384,400 KM</h3>
          </div>
          <div className={styles.estTime}>
            <span>EST. TRAVEL TIME</span>
            <h3>3 DAYS</h3>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Destination;
