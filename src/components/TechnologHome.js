/** @format */

import styles from "./TechnologyHome.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import vehicleIMG from "../assets/technology/image-launch-vehicle-portrait.jpg";

function TechnologHome() {
  const techData = {
    imgSrc: vehicleIMG,
    title: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  };

  return (
    <div className={styles.container}>
      <div className={styles.technology}>
        <div className={styles.background}></div>
        <header className={styles.header}>
          <p>
            <span> 03</span>
            SPACE LAUNCH 101
          </p>
        </header>
        <div className={styles.TechDetail}>
          <section className={styles.imgContainer}>
            <img src={techData.imgSrc} alt={techData.title} />
          </section>
          <section className={styles.navLinks}>
            <NavLink
              to="/technology/"
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
              <p>{techData.title}</p>
            </div>
            <div className={styles.description}>
              <p>{techData.description}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TechnologHome;
