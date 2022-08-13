import "animate.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "tw-elements";
import AnimatedLetter from "../AnimateLetter/AnimateLetter";
import Modeal from "../Modeal/Modeal";
import Project from "../Project/Project";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
const [projects,setProjects]=useState(null);


  return (
    <section className="portfolio-section">
      <div className="p-header">
        <div className="text-zone">
          <h1 className="leading-[60px] lg:text-8xl md:text-8xl sm:text-6xl text-5xl">
            
            <AnimatedLetter
              letterClass={letterClass}
              StrArray={[
                "M",
                "y",
                " ",
                "P",
                "o",
                "r",
                "t",
                "f",
                "o",
                "l",
                "i",
                "o",
              ]}
              idx={15}
            ></AnimatedLetter>
            <br />
          </h1>
          <br />
          <div className="paragrap-area mt-10">
            <br />
            <p>
              Every project is an opportunity to learn, to figure out problems
              and challenges, to invent and reinvent.
              <br />
              Visit My
              <span className="mr-1 text-[#08fdd8] font-bold text-sm">
                <Link to="/portfolio"> Portfolio Page</Link>
              </span>
              .
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
      </div>
      <div className="portfolio-area mt-20">
      <div className="card-area grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:justify-center">
        {
          services.map(service=> <Project id={service.id} setProjects={setProjects} service={service}></Project>)
        }
        
        </div>
        
      </div>
      {
        projects && <Modeal projects={projects}></Modeal>
      }
    </section>
  );
};

export default Portfolio;
