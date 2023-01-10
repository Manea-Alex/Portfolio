import React from "react";
// import CV from '../../assets/CV.pdf'
import CV from "../../assets/CV_Szőke_Manea_Alexandru_2023.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
