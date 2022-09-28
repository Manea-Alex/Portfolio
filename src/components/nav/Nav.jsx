import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GiArchiveResearch } from "react-icons/gi";
import { useState, useEffect } from "react";
// <=== In functie de href stie la care componenta sa mearga linia 15-19. Fiecare componenta are
// un block de sectiune cu un id specificat, hreful sare la acea sectiune cu acel id ==>
// onScroll={handleScroll}
// const Nav = () => {

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
    console.log(new Date().getTime());
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    // let height = 1;
    // if (document.body.scrollHeight < 5800) {
    //   height = 500;
    // }
    watchScroll();
    if (document.body.scrollHeight < 5800) {
      if (scrollY < 500) {
        setActiveNav("#");
      } else if (scrollY > 500 && scrollY < 1350) {
        setActiveNav("#about");
      } else if (scrollY > 1350 && scrollY < 2100) {
        setActiveNav("#experience");
      } else if (scrollY > 2100 && scrollY < 3650) {
        setActiveNav("#portofolio");
      } else if (scrollY > 3650) {
        setActiveNav("#contact");
      }
    } else if (
      document.body.scrollHeight > 5800 &&
      document.body.scrollHeight < 6500
    ) {
      if (scrollY < 550) {
        setActiveNav("#");
      } else if (scrollY > 550 && scrollY < 1450) {
        setActiveNav("#about");
      } else if (scrollY > 1450 && scrollY < 2200) {
        setActiveNav("#experience");
      } else if (scrollY > 2200 && scrollY < 3800) {
        setActiveNav("#portofolio");
      } else if (scrollY > 3800) {
        setActiveNav("#contact");
      }
    } else if (
      document.body.scrollHeight > 6500 &&
      document.body.scrollHeight < 7100
    ) {
      if (scrollY < 350) {
        setActiveNav("#");
      } else if (scrollY > 350 && scrollY < 1450) {
        setActiveNav("#about");
      } else if (scrollY > 1450 && scrollY < 2500) {
        setActiveNav("#experience");
      } else if (scrollY > 2500 && scrollY < 4400) {
        setActiveNav("#portofolio");
      } else if (scrollY > 4400) {
        setActiveNav("#contact");
      }
    } else if (
      document.body.scrollHeight > 7100 &&
      document.body.scrollHeight < 8600
    ) {
      if (scrollY < 350) {
        setActiveNav("#");
      } else if (scrollY > 350 && scrollY < 1450) {
        setActiveNav("#about");
      } else if (scrollY > 1450 && scrollY < 2500) {
        setActiveNav("#experience");
      } else if (scrollY > 2500 && scrollY < 4400) {
        setActiveNav("#portofolio");
      } else if (scrollY > 4400) {
        setActiveNav("#contact");
      }
    } else if (
      document.body.scrollHeight > 8600 &&
      document.body.scrollHeight < 9100
    ) {
      if (scrollY < 350) {
        setActiveNav("#");
      } else if (scrollY > 350 && scrollY < 1450) {
        setActiveNav("#about");
      } else if (scrollY > 1950 && scrollY < 3000) {
        setActiveNav("#experience");
      } else if (scrollY > 3000 && scrollY < 6450) {
        setActiveNav("#portofolio");
      } else if (scrollY > 6450) {
        setActiveNav("#contact");
      }
    }
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portofolio"
        onClick={() => setActiveNav("#portofolio")}
        className={activeNav === "#portofolio" ? "active" : ""}
      >
        <GiArchiveResearch />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};
// };

export default Nav;
