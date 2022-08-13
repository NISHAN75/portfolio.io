import React, { useEffect, useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import "animate.css";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import AnimatedLetter from "../AnimateLetter/AnimateLetter";
import "./About.css";
const useIcons = (slugs: string[]) => {
  const [icons, setIcons] = React.useState();
  React.useEffect(() => {
    fetchSimpleIcons(slugs).then(setIcons);
  }, []);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 500,
        bgHex: "#fff",
        fallbackHex: "#000",
        aProps: {
          onClick: (e: any) => e.preventDefault(),
        },
      })
    );
  }

  return (
    <div>
      <a className="icon-tag text-[#08fdd8]">HTML</a>
      <a className="icon-tag text-[#08fdd8]">CSS</a>
      <a className="icon-tag text-[#08fdd8]">JavaScript</a>
      <a className="icon-tag text-[#08fdd8]">React js</a>
      <a className="icon-tag text-[#08fdd8]">Bootstrap</a>
      <a className="icon-tag text-[#08fdd8]">Tailwind CSS</a>
      <a className="icon-tag text-[#08fdd8]">Node js</a>
      <a className="icon-tag text-[#08fdd8]">Daisy Components</a>
      <a className="icon-tag text-[#08fdd8]">TypeScript</a>
      <a className="icon-tag text-[#08fdd8]">React native</a>
      <a className="icon-tag text-[#08fdd8]">ES5/ES6</a>
      <a className="icon-tag text-[#08fdd8]">npm</a>
      <a className="icon-tag text-[#08fdd8]">REST</a>
      <a className="icon-tag text-[#08fdd8]">JSON</a>
      <a className="icon-tag text-[#08fdd8]">Git</a>
      <a className="icon-tag text-[#08fdd8]">mongodb</a>
    </div>
  );
};

const slugs = [
  "amazonaws",
  "android",
  "androidstudio",
  "antdesign",
  "typescript",
  "vercel",
  "visualstudiocode",
];

const About = () => {
  const icons = useIcons(slugs);
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="home-page about-page grid md:grid-cols-2 sm:grid-cols-1 overflow-hidden gap-5">
      <div className="text-zone">
        <h1 className="lg:text-8xl md:text-8xl sm:text-6xl text-5xl">
          <AnimatedLetter
            letterClass={letterClass}
            StrArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
            idx={15}
          ></AnimatedLetter>
          <br></br>
        </h1>

        <div className="paragrap-area mt-10">
          <br />
          <p>
            I’m a front-end developer located in Bangladesh. I am passionate
            about UI effects, animations, and creating intuitive, dynamic user
            experiences.
          </p>
          <br></br>
          <p>
            I am specialties in front-end development.I create successful
            responsive websites that are fast, easy to use, and built with best
            practices. The main area of my expertise is front-end development,
            HTML, CSS, JavaScript, React js, Bootstrap, Tailwind CSS, Node js,
            daisy Components, TypeScript, React native, and I have essential
            programming experience working on my personal projects.
          </p>
          <br></br>
          <p>
            This is one of the hobbies that I want to fulfill. I want to know
            about technology and work with it. I want to know more about the
            technologies I am currently working on. And over time, I want to
            master more and more new technologies. I like to be excited,
            determined, patient, and quick to learn and put it to use. Although
            I do not have much knowledge, I patiently try to solve challenging
            problems.
          </p>
        </div>
        <div className="information-me mt-10">
          <div className="data-info flex">
            <h5 className="mr-2 text-sm font-bold text-white">City:</h5>
            <span className="text-white text-sm">Chattogram,Bangladesh</span>
          </div>
          <div className="data-info flex">
            <h5 className="mr-2 text-sm font-bold text-white">Education:</h5>
            <span className="text-white text-sm">
              B.B.S in National university
            </span>
          </div>
          <div className="data-info flex">
            <h5 className="mr-2 text-sm font-bold text-white">Whatsapp:</h5>
            <span className="text-white text-sm">+8801622253558</span>
          </div>
          <div className="data-info flex">
            <h5 className="mr-2 text-sm font-bold text-white">Email:</h5>
            <span className="text-white text-sm">nishandas880@gmail.com</span>
          </div>
          <div className="data-info">
            <div className="resume mt-3">
              <button className="btn-one">
                <div className="btn-content">
                  <span className="bg"></span>
                  <span className="base"></span>
                  <span className="text">
                    <a
                      href="https://docs.google.com/document/d/1DUd79JxWy552jVI43rZIvHjsQ1AJQwprE9KA5FNefF8/edit?usp=sharing"
                      target="_blank"
                    >
                      My Resume
                    </a>
                  </span>
                </div>
              </button>
            </div>
            <div class="social-area flex mt-10">
              <a
                href="https://www.facebook.com/nishan.das.3766"
                target="_blank" 
                className="bg-[#08fdd8] p-2 text-xl text-black rounded-full duration-75 hover:bg-black hover:text-white mr-4"
              >
                <FaFacebookF></FaFacebookF>
              </a>
              <a
                className="bg-[#08fdd8] p-2 text-xl text-black rounded-full duration-75 hover:bg-black hover:text-white mr-4"
                href="https://www.linkedin.com/in/nishan-das-00bb58215/"
                target="_blank" 
              >
                <FaLinkedinIn></FaLinkedinIn>
              </a>
              <a
                className="bg-[#08fdd8] p-2 text-xl text-black rounded-full duration-75 hover:bg-black hover:text-white  mr-4"
                href="https://twitter.com/NishanD79240904"
                target="_blank" 
              >
                <FaTwitter></FaTwitter>
              </a>
              <a
                className="bg-[#08fdd8] p-2 text-xl text-black rounded-full duration-75 hover:bg-black hover:text-white"
                href="https://github.com/NISHAN75"
                target="_blank" 
              >
                <FaGithub></FaGithub>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="animation-skill-icons">
        <Cloud className="icon-tag">{icons}</Cloud>
      </div>
    </div>
  );
};

export default About;
