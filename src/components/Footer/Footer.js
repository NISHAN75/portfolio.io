import React from "react";
import "./Footer.css";
import { FaFacebookF ,FaTwitter,FaLinkedinIn,FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer justify-center">
      <section className="mt-5">
        <div>
          <p className="text-white text-sm">Copyright 	&copy; 2022 Nishan Das. All Rights Reserved</p>
        </div>
        <div class="grid grid-flow-col gap-4 mt-5 ml-20">
          <a className="bg-[#08fdd8] p-2 text-xl text-black rounded-full duration-75 hover:bg-black hover:text-white" href="https://www.facebook.com/nishan.das.3766" target="_blank" >
            <FaFacebookF></FaFacebookF>
          </a>
          <a className="bg-[#08fdd8] p-2 text-xl text-black rounded-full duration-75 hover:bg-black hover:text-white"  href="https://www.linkedin.com/in/nishan-das-00bb58215/" target="_blank"  >
            <FaLinkedinIn></FaLinkedinIn>
          </a>
          <a className="bg-[#08fdd8] p-2 text-xl text-black rounded-full duration-75 hover:bg-black hover:text-white" href="https://twitter.com/NishanD79240904" target="_blank" >
            <FaTwitter></FaTwitter>
          </a>
          <a className="bg-[#08fdd8] p-2 text-xl text-black rounded-full duration-75 hover:bg-black hover:text-white" href="https://github.com/NISHAN75" target="_blank" >
            <FaGithub></FaGithub>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
