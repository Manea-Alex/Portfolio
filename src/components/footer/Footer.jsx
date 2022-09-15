import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Alex
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>{" "}
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          {" "}
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portofolio">Portofolio</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>{" "}
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/alex.manea.391082" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/manealex022/" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com" target="_blank">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Alex is that guy. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
