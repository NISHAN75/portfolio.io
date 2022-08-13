import React from "react";
import { Outlet } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills"


const AllSection = () => {
  return (
    <section className="container">
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Contact></Contact>
    
      
    </section>
  );
};

export default AllSection;
