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
            <a href="#" className={Style.home_container_left_btn_button}>
              Hire Me
            </a>
            <a href="#" className={Style.home_container_left_btn_button}>
              Let's Talk
            </a>
          </div>

          <div className={Style.home_container_left_socials}>
            <a href="#" className={Style.home_container_left_socialsLi}>
              <BsLinkedin />
            </a>

            <a href="#" className={Style.home_container_left_socialsTw}>
              <BsTwitter />
            </a>

            <a href="#" className={Style.home_container_left_socialsGh}>
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
