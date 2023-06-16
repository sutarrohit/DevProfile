import React from "react";

// INTERNAL IMPORT
import Style from "./NavBar.module.css";
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
  return (
    <div className={Style.navbar} id="#">
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <h1>Developer</h1>
        </div>
        <div className={Style.navbar_container_right}>
          <a href="#">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <div className={Style.navbar_container_right_menu}>
            <IoMdMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
