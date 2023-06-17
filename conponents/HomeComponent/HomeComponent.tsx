import React from "react";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

// INTERNAL IMPORT
import Style from "./HomeComponent.module.css";

const HomeComponent = () => {
  return (
    <div className={Style.home}>
      <div className={Style.home_container}>
        {/* Left Side  */}
        <div className={Style.home_container_left}>
          <div className={Style.home_container_left_info}>
            <h1>
              Hi, I'm <span>Rohit Sutar</span>
            </h1>

            <h3>Full Stack Developer.</h3>

            <p>
              I am a full stack developer with a passion for creating seamless
              and impactful web applications. With a deep understanding of
              software development and expertise in DevOps practices.
            </p>
          </div>

          <div className={Style.home_container_left_btn}>
            <a
              href="https://www.linkedin.com/in/rohit-sutar-89687a1b6"
              className={Style.home_container_left_btn_button}
              target="_blank"
            >
              Hire Me
            </a>
            <a href="#contact" className={Style.home_container_left_btn_button}>
              Let's Talk
            </a>
          </div>

          <div className={Style.home_container_left_socials}>
            <a
              href="https://www.linkedin.com/in/rohit-sutar-89687a1b6"
              className={Style.home_container_left_socialsLi}
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              href="https://twitter.com/imSrohitS"
              className={Style.home_container_left_socialsTw}
              target="_blank"
            >
              <BsTwitter />
            </a>

            <a
              href="https://github.com/sutarrohit"
              className={Style.home_container_left_socialsGh}
              target="_blank"
            >
              <BsGithub />
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className={Style.home_container_right}></div>
      </div>
    </div>
  );
};

export default HomeComponent;
