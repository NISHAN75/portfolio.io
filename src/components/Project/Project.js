import "animate.css";
import React from "react";
// import Swiper core and required modules

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import "./Project.css";

// import required modules

const Project = ({ service, setProjects }) => {
  const {
    id,
    Description,
    shortCaption,
    Features,
    Live,
    server,
    client,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    name,
   
  } = service;
  return (
    <div class="card w-full bg-base-100 shadow-xl">
      <figure>
        <>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
              <img src={img1}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6}></img>
            </SwiperSlide>
          </Swiper>
        </>
      </figure>
      <div class="card-body">
        <div className="technological-area">
          <ul className="flex justify-center">
            <li className="ml-2 t-tab bg-[#08fdd8]">React</li>
            <li className="ml-2 t-tab bg-[#08fdd8]">Firebase</li>
            <li className="ml-2 t-tab bg-[#08fdd8]">Node js</li>
            <li className="ml-2 t-tab bg-[#08fdd8]">Mongodb</li>
          </ul>
        </div>
        <div className="project-content">
          <h2 class="text-center text-xl font-bold text-black">{name}</h2>
          <p className="text-center text-black">{shortCaption}</p>
          <div class="text-center mb-10">
            <ul className="grid grid-cols-3 ">
              <li className="ml-5">
                <button className="btn-two">
                  <div className="btn-content">
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="text">
                      <a href={Live} target="_blank">
                        Live site
                      </a>
                    </span>
                  </div>
                </button>
              </li>
              <li className="ml-5">
                <button className="btn-two">
                  <div className="btn-content">
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="text">
                      <a href={client} target="_blank">
                        Github Client
                      </a>
                    </span>
                  </div>
                </button>
              </li>
              <li className="ml-5">
                <button className="btn-two">
                  <div className="btn-content">
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="text">
                      <a href={Live} target="_blank">
                        Github Server
                      </a>
                    </span>
                  </div>
                </button>
              </li>
            </ul>
          </div>

            <label className="model-link btn btn-primary mt-10" for="my-modal-3" onClick={() => setProjects(service)}>
              Explore More
            </label>
        </div>
      </div>
    </div>
  );
};

export default Project;
