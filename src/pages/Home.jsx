import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos } from "react-icons/md";

// import hero from "../assets/hero-2.webp";
import { Women } from "../utils/svgs";
import Carousel from "react-material-ui-carousel";
import { AProducts, CheapProducts } from "../components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="py-10 px-10 lg:px-72 hero">
        <div className="flex gap-10 items-center flex-col lg:flex-row slider-container">
          <Carousel className="w-[100%]">
            <img
              src="assets/slide-1.jpg"
              className="w-[100%] h-[200px] lg:h-[500px] rounded-2xl overflow-hidden"
              alt="Slide 1"
            />
            <img
              src="assets/slide-2.jpg"
              className="w-[100%] h-[200px] lg:h-[500px] rounded-2xl overflow-hidden"
              alt="Slide 2"
            />
            <img
              src="assets/slide-3.jpg"
              className="w-[100%] h-[200px] lg:h-[500px] rounded-2xl overflow-hidden"
              alt="Slide 3"
            />
          </Carousel>
        </div>
      </section>
      <section className="products px-1 xl:px-72 ">
        <h1 className="section-heading">Tavsiyalar</h1>
        <AProducts />
      </section>
      <section className="products mt-16 py-10 px-1 xl:px-72 ">
        <CheapProducts />
      </section>
    </>
  );
};

export default Home;
