/** @format */

import React from "react";
import moonIMG from "../assets/destination/image-moon.webp";
import { NavLink } from "react-router-dom";
import styles from "./DestinationHome.module.css";
function DestinationHome() {
  const planetData = {
    name: "MOON",
    imgSrc: moonIMG,
    description:
      " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    footer: {
      avgDistance: "AVG. DISTANCE",
      distanceValue: "384,400 KM",
      estTime: "EST. TRAVEL TIME",
      timeValue: "3 DAYS",
    },
  };

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
        <aside>
          <div className={styles.imgContainer}>
            <img src={planetData.imgSrc} alt={planetData.name} width={170} height={170} />
          </div>
          <section className={styles.about}>
            <div className={styles.linksContainer}>
              <ul className={styles.links}>
                <li>
                  {" "}
                  <NavLink
                    end
                    to="/destination"
                    className={({ isActive }) => (isActive ? styles.active : styles)}
                  >
                    MOON
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/destination/mars"
                    className={({ isActive }) => (isActive ? styles.active : styles)}
                  >
                    {" "}
                    MARS{" "}
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/destination/europa"
                    className={({ isActive }) => (isActive ? styles.active : styles)}
                  >
                    EUROPA
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/destination/titan"
                    className={({ isActive }) => (isActive ? styles.active : styles)}
                  >
                    TITAN
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.planetName}>
              <p> {planetData.name}</p>
            </div>
            <div className={styles.planetDescription}>
              <p>{planetData.description}</p>
            </div>
            <div className={styles.divider}></div>
          </section>

          <footer className={styles.footer}>
            <div className={styles.avgDistance}>
              <span>AVG. DISTANCE</span>
              <h3>{planetData.footer.distanceValue}</h3>
            </div>
            <div className={styles.estTime}>
              <span>EST. TRAVEL TIME</span>
              <h3>{planetData.footer.timeValue}</h3>
            </div>
          </footer>
        </aside>
      </main>
    </div>
  );
}

export default DestinationHome;
