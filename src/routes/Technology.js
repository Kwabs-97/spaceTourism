/** @format */

import styles from "./Technology.module.css";
import React from "react";
import launchVehicleIMG from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spacePortIMG from "../assets/technology/image-spaceport-landscape.jpg";
import spaceCapsuleImg from "../assets/technology/image-space-capsule-landscape.jpg";
import TechDetail from "../components/TechDetail";

import { useParams } from "react-router-dom";

function Technology() {
  const { techName } = useParams();

  const techInfo = {
    vehicle: {
      title: "LAUNCH VEHICLE",
      info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      img: launchVehicleIMG,
    },

    port: {
      title: "SPACE PORT",
      info: "   A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch",
      img: spacePortIMG,
    },
    capsule: {
      title: "SPACE CAPSULE",
      info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      img: spaceCapsuleImg,
    },
  };

  const techData = techInfo[techName];
  console.log(techName);

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
        <TechDetail title={techData.title} info={techData.info} img={techData.img} />
      </div>
    </div>
  );
}

export default Technology;
