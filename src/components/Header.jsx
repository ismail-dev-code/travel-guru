import React from "react";
import { FaArrowRight } from "react-icons/fa";
import carouselImage from "../assets//Rectangle 26.png";
import carouselImage2 from "../assets//Rectangle 27.png";
import carouselImage3 from "../assets//Rectangle 28.png";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex items-center justify-center mt-24">
      <div className="text-white flex-1 space-y-2">
        <h1 className="text-4xl font-bold">Cox's bazar</h1>
        <p className="text-base-100">
          Cox's Bazar is a city, fishing port, tourism centre and <br />{" "}
          district headquarters in southeastern Bangladesh. It is <br /> famous
          mostly for its long natural sandy beach, and it ...
        </p>
        <Link to={'/destination'} className="btn bg-primary">
          Booking <FaArrowRight />
        </Link>
      </div>
      <div className="carousel flex-1">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={carouselImage3} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={carouselImage} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={carouselImage3} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={carouselImage2} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
