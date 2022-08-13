import "animate.css";
import React, { useEffect, useState,useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import AnimateLetter from "../AnimateLetter/AnimateLetter";
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vs42f2v', 'template_7lawyqm', form.current, '2---X-G8_ycDjswbq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className="home-page grid lg:grid-cols-2  gap-5">
      <div className="text-zone">
        <h1 className="lg:text-8xl md:text-8xl sm:text-6xl text-5xl">
          <AnimateLetter
            letterClass={letterClass}
            StrArray={["C", "o", "n", "t", "a", "c", "t", "  ", "M", "e"]}
            idx={15}
          ></AnimateLetter>
          <br />
        </h1>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
              </li>
              <li className="half">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your email"
                  required
                />
              </li>
              <li className="half">
                <input type="text" name="subject" placeholder="Subject" required />
              </li>
              <li>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Enter Your Message"
                  required
                />
              </li>
              <li>
                <button type="submit"  className="s-btn">
                  submit
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="map-area relative">
        <div className="map-wrap lg:w-full md:w-full sm:w-[500px] w-[300px]">
            <MapContainer center={[22.276296375621556, 91.77002882770854]} zoom={13}>
              <TileLayer url="https://api.maptiler.com/maps/pastel/256/{z}/{x}/{y}.png?key=UhGDlUzwInNCIVeylG0C" />
              <Marker position={[44.96366, 19.61045]}>
                <Popup>
                  Hi, I'm lives here, come over for a cup of coffee :)
                </Popup>
              </Marker>
            </MapContainer>
        </div>
        <div className="map-info lg:w-[260px] ">
            Nishan Das
            <br />
            potenga,
            <br />
            Chattogram, Bangladesh
            <br />
            <span>nishandas880@gmail.com</span>
          </div>
      </div>
    </section>
  );
};

export default Contact;
