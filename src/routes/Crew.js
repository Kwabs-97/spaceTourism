/** @format */

import React from "react";
import styles from "./Crew.module.css";
import { useParams } from "react-router-dom";
import CrewDetail from "../components/CrewDetail";

import douglasIMG from "../assets/crew/image-douglas-hurley.webp";
import markIMG from "../assets/crew/image-mark-shuttleworth.webp";
import victorIMG from "../assets/crew/image-victor-glover.webp";
import anoushehIMG from "../assets/crew/image-anousheh-ansari.webp";

function Crew() {
  const { crewName } = useParams();


  const crewContent = {
    douglas: {
      imgSrc: douglasIMG,
      position: "COMMANDER",
      name: "DOUGLAS HURLEY",
      description:
        " Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    mark: {
      imgSrc: markIMG,
      position: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    victor: {
      imgSrc: victorIMG,
      position: "PILOT",
      name: "VICTOR GLOVER",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    },
    anousheh: {
      imgSrc: anoushehIMG,
      position: "FLIGHT ENGINEER",
      name: "ANOUSHEH ANSARI",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.  ",
    },
  };

  const crewData = crewContent[crewName];
  
  return (
    <div className={styles.crewContainer}>
      <div className={styles.crew}>
        <div className={styles.background}></div>
        <header className={styles.header}>
          <p>
            <span>02</span>
            MEET YOUR CREW
          </p>
        </header>
        <CrewDetail
          name={crewData.name}
          imgSrc={crewData.imgSrc}
          position={crewData.position}
          description={crewData.description}
        />
      </div>
    </div>
  );
}

export default Crew;
