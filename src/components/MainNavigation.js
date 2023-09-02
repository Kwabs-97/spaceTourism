/** @format */

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { ReactSVG } from "react-svg";

import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

function MainNavigation() {
  const [isToggled, setIsToggled] = useState(false);
  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <nav className={styles.nav}>
        <Link to="/">
          {" "}
          <ReactSVG src={logo} />
        </Link>

        {!isToggled && (
          <ReactSVG src={hamburger} onClick={toggleHandler} className={styles.hamburger} />
        )}

        {isToggled && (
          <div className={styles.sidebar}>
            <div className={styles.sidebarBackground}></div>
            <ul className={styles.sidebarItems}>
              <ReactSVG src={close} onClick={toggleHandler} className={styles.closeSVG} />
              <div className={styles.sidebarItemsContainer}>
                <li>
                  {" "}
                  <NavLink to="/home">
                    <span>00</span>HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/destination">
                    <span>01</span>DESTINATION
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/crew">
                    <span>02</span>CREW
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/technology">
                    <span>03</span>TECHNOLOGY
                  </NavLink>
                </li>
              </div>
            </ul>
          </div>
        )}

        <div className={styles.pcNavContainer}>
          <div className={styles.pcNavBackground}></div>
          <ul className={styles.pcNav}>
            <li>
              <NavLink className={({ isActive }) => (isActive ? styles.active : styles)} to="/" end>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : styles)}
                to="/destination"
              >
                DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? styles.active : styles)} to="/crew">
                CREW
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : styles)}
                to="/technology"
              >
                TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MainNavigation;
