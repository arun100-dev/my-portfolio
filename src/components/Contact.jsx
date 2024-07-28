import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
    <div className="container contact" id="contact">
      <h1>CONTACT ME</h1>
      <div
        className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <a href="https://www.instagram.com/_here_is__arun/" target="_blank" className="items">
          <FaInstagram className="icons" />
        </a>
     
        <a href="https://www.linkedin.com/in/arun-sharma-1bb097318" target="_blank" className="items">
          <CiLinkedin className="icons" />
        </a>
      
        <a href="https://github.com/arun100-dev" target="_blank" className="items">
          <FaGithubSquare className="icons" />
        </a>
        <a
          href="mailto:janyalarun@gmail.com"
          target="_blank"
          className="items"
        >
          <SiGmail className="icons" />
        </a>
      </div>
    </div>
  </>
  )
}

export default Contact
