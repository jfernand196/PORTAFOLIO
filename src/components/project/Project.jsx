import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Project = () => {
  return (
    <>
      <section id='portfolio'>
        <h2 className="section-title">Projects</h2>
        <span className="section-subtitle">Most recent work</span>
      </section>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <img src="project1.svg" alt="" />

          <h3>Business Websites</h3>
          <p>
            Dynamic business sites that reflect your brand and engage customers
            effectively.
          </p>

          <a href="https://github.com/jfernand196" className="arrow">
            Project Link
            <FontAwesomeIcon
              icon={faArrowRight}
              className="fa-solid fa-arrow-right button-icon"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src="project2.svg" alt="" />

          <h3>Portfolio Websites</h3>
          <p>
            Impressive portfolio sites that showcase your talents with a
            flawless user experience.
          </p>
          <a href="https://github.com/jfernand196">
            Project Link
            <i className="fa-solid fa-arrow-right button-icon"></i>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src="project3.svg" alt="" />

          <h3>Landing Pages</h3>
          <p>
            Compelling landing pages that drive conversions and engage your
            audience.
          </p>
          <a href="https://github.com/jfernand196">
            Project Link
            <i className="fa-solid fa-arrow-right button-icon"></i>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
