import React from "react";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

// INTERNAL IMPORT
import Style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={Style.contact} id="contact">
      <div className={Style.contact_container}>
        <div className={Style.contact_container_left}>
          <div className={Style.contact_container_heading}>
            <h2>Address:</h2>
            <p>India</p>
            <h2>Email:</h2>
            <p>rohitsutar082@gmail.com</p>
          </div>

          <div className={Style.contact_container_left_socials}>
            <h2>Socials:</h2>

            <div className={Style.contact_container_left_socials_links}>
              <a
                href="https://www.linkedin.com/in/rohit-sutar-89687a1b6"
                className={Style.contact_container_left_socialsLi}
                target="_blank"
              >
                <BsLinkedin />
              </a>

              <a
                href="https://twitter.com/imSrohitS"
                className={Style.contact_container_left_socialsTw}
                target="_blank"
              >
                <BsTwitter />
              </a>

              <a
                href="https://github.com/sutarrohit"
                className={Style.contact_container_left_socialsGh}
                target="_blank"
              >
                <BsGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className={Style.contact_container_right}>
          <div className={Style.contact_container_right_input}>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              placeholder="Enter Name"
              className={Style.contact_container_right_userName}
            />
          </div>

          <div className={Style.contact_container_right_input}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              placeholder="Enter Email"
              className={Style.contact_container_right_input_userName}
            />
          </div>

          {/* Teaxt Area */}
          <div className={Style.contact_container_right_input_text}>
            <label htmlFor="description">Message:</label>
            <textarea placeholder="Something about yourself in few words"></textarea>
          </div>

          <div className={Style.contact_container_right_input_button}>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
