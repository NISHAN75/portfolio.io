import "animate.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NameLogo from "../../img/name-icon.png";
import AnimateLetter from "../AnimateLetter/AnimateLetter";
import "./Home.css";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["i", "s", "h", "a", "n", " ", "D", "a", "s"];
  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <section className="home-page">
      <div className="text-zone lg:ml-8 md:ml-4 sm:ml-0 ml-0">
        <h1 className="lg:text-8xl md:text-8xl sm:text-6xl text-5xl">
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className="flex">
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={NameLogo}
              alt="logo img"
              className="lg:w-[90px] lg:h-[90px] md:w-[85px] md:h-[85px] sm:w-[55px] sm:h-[55px] h-[45px] w-[45px]"
            />
            <AnimateLetter
              letterClass={letterClass}
              StrArray={nameArray}
              idx={15}
            ></AnimateLetter>
            <br />
          </span>
          <AnimateLetter
            letterClass={letterClass}
            StrArray={jobArray}
            idx={15}
          ></AnimateLetter>
          <br></br>
        </h1>
        <h2>
          <br></br>Frontend Developer / React Developer / javaScript Expert
          <br></br>
        </h2>
        <button className="btn-one">
          <div className="btn-content">
            <span className="bg"></span>
            <span className="base"></span>
            <span className="text">
              <Link to="/contact">Contact Me</Link>
            </span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Home;
