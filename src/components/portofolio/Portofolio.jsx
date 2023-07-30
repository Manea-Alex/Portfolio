import React from "react";
import "./portofolio.css";
import IMG1 from "../../assets/etch-a-sketch.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/Flight.jpg";
import IMG6 from "../../assets/Tic-Tac-Toe.jpg";

import { GiArchiveResearch } from "react-icons/gi";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Etch-a-sketch",
    github: "https://github.com/Manea-Alex/Etch-a-Sketch",
    demo: "https://manea-alex.github.io/Etch-a-Sketch/",
  },

  {
    id: 2,
    image: IMG2,
    title: "Fighting Game",
    github: "https://github.com/Manea-Alex/Fighting-Game",
    demo: "https://manea-alex.github.io/Fighting-Game/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Calculator Project",
    github: "https://github.com/Manea-Alex/Project_Calculator",
    demo: "https://manea-alex.github.io/Project_Calculator/",
  },

  {
    id: 4,
    image: IMG4,
    title: "Negombo",
    // github: "",
    demo: "https://negombo.it/en/",
  },

  {
    id: 5,
    image: IMG5,
    title: "Flight Search Application",
    github: "https://github.com/Manea-Alex/Air-Wise",
    demo: "https://manea-alex.github.io/Air-Wise/",
  },

  {
    id: 6,
    image: IMG6,
    title: "Tic Tac Toe",
    github: "https://github.com/Manea-Alex/TicTacToe",
    demo: "https://manea-alex.github.io/TicTacToe/",
  },
];
const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portofolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portofolio__item">
              <div className="portofolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portofolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
