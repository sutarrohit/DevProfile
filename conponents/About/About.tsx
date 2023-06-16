import React from "react";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./About.module.css";
import profile from "../../img/profile.jpg";

const About = () => {
  return (
    <div className={Style.about} id="about">
      <div className={Style.about_container}>
        <h1>
          About <span>Me</span>
        </h1>

        <Image
          src={profile}
          className={Style.about_container_img}
          alt="Picture of the author"
          width={300}
          height={300}
        />
        <p>
          I am a full stack developer with a passion for creating seamless and
          impactful web applications. With a deep understanding of software
          development and expertise in DevOps practices.
        </p>

        <a href="#" className={Style.about_container_btn}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default About;
