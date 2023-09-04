/** @format */

import React from "react";
import styles from "./Destination.module.css";
import { NavLink, useParams } from "react-router-dom";
import moonIMG from "../assets/destination/image-moon.webp";
import marsIMG from "../assets/destination/image-mars.webp";
import europaIMG from "../assets/destination/image-europa.webp";
import titanImg from "../assets/destination/image-titan.webp";

function Destination() {
  const { planetName } = useParams();

  const planetContent = {
    moon: {
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
    },

    mars: {
      name: "MARS",
      imgSrc: marsIMG,
      description:
        " Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      footer: {
        avgDistance: "AVG. DISTANCE",
        distanceValue: "225 MIL. KM",
        estTime: "EST. TRAVEL TIME",
        timeValue: "9 MONTHS",
      },
    },
    europa: {
      name: "EUROPA",
      imgSrc: europaIMG,
      description:
        " The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      footer: {
        avgDistance: "AVG. DISTANCE",
        distanceValue: "628 MIL. KM",
        estTime: "EST. TRAVEL TIME",
        timeValue: "3 YEARS",
      },
    },
    titan: {
      name: "TITAN",
      imgSrc: titanImg,
      description:
        " The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      footer: {
        avgDistance: "AVG. DISTANCE",
        distanceValue: "1.6 BIL. KM",
        estTime: "EST. TRAVEL TIME",
        timeValue: "7 YEARS",
      },
    },
  };

  const planetData = planetContent[planetName];

  if (!planetData) {
    return <div>Planet not found</div>;
  }

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
                    to="/destination/moon"
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

export default Destination;
