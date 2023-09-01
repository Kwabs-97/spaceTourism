/** @format */

import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.homeBackground}></div>
      <main className={styles.home}>
        <section className={styles.hero}>
          <div className={styles.header}>
            <p>SO, YOU WANT TO TRAVEL TO</p>
          </div>
          <div className={styles.title}>
            <h1>SPACE</h1>
          </div>
          <div className={styles.about}>
            <p>
              Let’s face it; if you want to go to space, you might as well genuinely go to outer
              space and not hover kind of on the edge of it. Well sit back, and relax because we’ll
              give you a truly out of this world experience!
            </p>
          </div>
        </section>
      </main>
      <section className={styles.aside}>
        <div className={styles.explore}>
          <span>EXPLORE</span>
        </div>
      </section>
    </div>
  );
}

export default Home;
