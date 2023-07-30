import React from "react";
import "./header.css";
import CTA from "./CTA";
import Alex from "../../assets/Portofoliu5.jpg";
import HeaderSocial from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Szőke-Manea Alexandru </h1>
        <h5 className="text-light">Engineer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={Alex} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
