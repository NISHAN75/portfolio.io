import "animate.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "tw-elements";
import AnimatedLetter from "../AnimateLetter/AnimateLetter";
import "./Skills.css";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <div className="container home-page  about-page grid md:grid-cols-2 sm:grid-cols-1 overflow-hidden gap-5">
      <div className="text-zone">
        <h1 className=" lg:text-8xl md:text-8xl sm:text-6xl text-5xl">
          <AnimatedLetter
            letterClass={letterClass}
            StrArray={[
              "S",
              "k",
              "i",
              "l",
              "l",
              "s",
              " ",
              "",
              "&",
            ]}
            idx={15}
          ></AnimatedLetter><br/>
          <AnimatedLetter  letterClass={letterClass}
            StrArray={[
              "E",
              "x",
              "p",
              "e",
              "r",
              "i",
              "e",
              "n",
              "c",
              "e",
            ]}
            idx={15}></AnimatedLetter>
          <br/>
        </h1>
        <br/>    
        <div className="paragrap-area mt-10">
          <br/>
          <p>
            I am a front-end developer. I have a deep interest in web
            development and have made many projects using ReactJS ,NodeJs and
            other technologies. I have essential programming experience working
            on my personal projects. I like problem-solving and am interested in
            learning about new technologies.
          </p>
          <p>
            I have experience in Front-end (HTML, CSS, JavaScript, React.Js,
            Bootstrap, Tailwind CSS, daisy Components, TypeScript, React
            native), Back-end (Node.Js, Express.Js), Databases (MongoDB) and
            UI/UX designs (Figma).can you see my some{" "}
            <span className="mr-1 text-[#08fdd8] font-bold text-sm">
              <Link to="/contact">projects</Link>
            </span>
            ?.
          </p>
          <br></br>
          <p>
            Visit my{" "}
            <span className="text-[#08fdd8] font-bold text-sm mr-1 hover:text-[#398579] focus:outline-none focus:ring focus:ring-violet-30">
              <a
                href="https://www.linkedin.com/in/nishan-das-00bb58215/"
                target="_blank"
              >
                Linkdin
              </a>
            </span>
            profile for more details or just{" "}
            <span className="text-[#08fdd8] font-bold text-sm hover:text-[#398579] focus:outline-none focus:ring focus:ring-violet-30">
              <Link to="/contact">Contact</Link>
            </span>{" "}
            me.
          </p>
        </div>
      </div>
      <div className="inside-skills mt-10">
        <div className="prograss-area overflow-hidden">
          <div className="relative pt-1">
            <span>Front-end</span>
            <div className="overflow-hidden h-[3px] mt-2 mb-4 text-xs flex rounded bg-white">
              <div
                style={{ width: "85%" }}
                className="shadow-none animate__animated  animate__fadeIn flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#08fdd8]"
              ></div>
            </div>
          </div>
          <div className="relative pt-1">
            <span>Back-end</span>
            <div className="overflow-hidden h-[3px] mt-2 mb-4 text-xs flex rounded bg-white">
              <div
                style={{ width: "65%" }}
                className="shadow-none animate__animated  animate__fadeIn flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#FF2253]"
              ></div>
            </div>
          </div>
          <div className="relative pt-1">
            <span>JavaScript</span>
            <div className="overflow-hidden h-[3px] mt-2 mb-4 text-xs flex rounded bg-white">
              <div
                style={{ width: "70%" }}
                className="shadow-none animate__animated  animate__fadeIn flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#D26CD5]"
              ></div>
            </div>
          </div>
          <div className="relative pt-1">
            <span> React Js</span>
            <div className="overflow-hidden h-[3px] mt-2 mb-4 text-xs flex rounded bg-white">
              <div
                style={{ width: "80%" }}
                className="shadow-none animate__animated  animate__fadeIn flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#08fdd8]"
              ></div>
            </div>
          </div>
        </div>
        <div className="skills-box grid md:grid-cols-2 sm:grid-cols-1 gap-5">
          <div className="box-area bg-[#2A2A2A] p-4 shadow-lg">
            <h4>Frontend developer</h4>
            <span className="text-sm text-[#928d8d]">To The End<br/> 2021-2022</span>
            <p className="text-sm text-[#928d8d] mt-4">
              {" "}
              I start web development learning in July 2021. Recently I can
              completed front-end development with good knowledge.{" "}
            </p>
          </div>
          <div className="box-area bg-[#2A2A2A] p-4 shadow-lg">
            <h4>Backend developer</h4>
            <span className="text-sm text-[#928d8d]">To The start <br></br> 2022 - continue learning</span>
            <p className="text-sm text-[#928d8d] mt-4">
            Unique website design and development studio that can make your online business dreams a reality.
            </p>
          </div>
          <br/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
