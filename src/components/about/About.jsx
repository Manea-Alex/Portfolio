import React from "react";
import "./about.css";
import Alex from "../../assets/Portofoliu4.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className="about__me-Alex" src={Alex} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Studies</h5>
              <small>University</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Experience</h5>
              <small>6+ Months Working</small>
            </article>
          </div>
          <p>
            Hi, I'm Szőke-Manea Alexandru, a recent graduate in Automation and
            Computer Science from the Technical University of Cluj-Napoca.
            Equipped with enhanced programming skills, I'm eager to take on
            fresh challenges in this field. Committed to professional
            development, I aim to continue advancing my career in this industry.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
