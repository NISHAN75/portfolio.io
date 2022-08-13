import "animate.css";
import React from "react";
// import Swiper core and required modules

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FaJira } from "react-icons/fa";
import { Pagination } from "swiper";

const Modeal = ({ projects }) => {
  console.log(projects);
  const {
    Description,
    Live,
    server,
    client,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    li1,
    li2,
    li3,
    li4,
    li5,
    li6,
    li7,
  } = projects;
  return (
    <div className="w-full">
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="conent-area">
            <div class="card p-2">
              <figure>
                <>
                  <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
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
                  <h6 className="text-center font-bold mb-2 text-sm text-black">
                    Technologies Used:
                  </h6>
                  <ul className="flex justify-center">
                    <li className="ml-2 t-tab bg-[#08fdd8]">React</li>
                    <li className="ml-2 t-tab bg-[#08fdd8]">Firebase</li>
                    <li className="ml-2 t-tab bg-[#08fdd8]">Node js</li>
                    <li className="ml-2 t-tab bg-[#08fdd8]">Mongodb</li>
                  </ul>
                </div>
                <div className="project-content">
                  <div class="text-center mb-10">
                    <ul className="grid grid-cols-3">
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
                </div>
              </div>
              <div className="project-description">
                <div className="description-area">
                  <h5 className="text-left text-black text-sm font-bold">
                    Description:
                  </h5>
                  <p className="text-black text-[13px]">{Description}</p>
                </div>
                <div className="Features">
                  <h5 className="text-black text-sm font-bold">Features:</h5>
                  <ul>
                    {
                      <li className="text-black flex items-start">
                        <span><FaJira className="mr-3"></FaJira> </span>{li1}
                      </li>
                    }
                    {
                      <li className="text-black flex items-start">
                        <span><FaJira className="mr-3"></FaJira> </span>{li2}
                      </li>
                    }
                    {
                      <li className="text-black flex items-start">
                        <span><FaJira className="mr-3"></FaJira> </span>{li3}
                      </li>
                    }
                    {
                      <li className="text-black flex items-start">
                        <span><FaJira className="mr-3"></FaJira> </span>{li4}
                      </li>
                    }
                    {
                      <li className="text-black flex items-start">
                        <span><FaJira className="mr-3"></FaJira> </span>{li5}
                      </li>
                    }
                    {
                      li6 && <li className="text-black flex items-start">
                        <span><FaJira className="mr-3"></FaJira> </span>{li6}
                      </li>
                    }
                    {
                      li7 && <li className="text-black flex items-start">
                        <span><FaJira className="mr-3"></FaJira> </span>{li7}
                      </li>
                    }

                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modeal;
