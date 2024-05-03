import React from "react";
import Carousel from "react-material-ui-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AProducts, CategoryList, Categorys, CheapProducts } from "../components";

const Home = () => {
  return (
    <>
      <section className="py-10 px-1 lg:px-20 xl:px-72 hero">
        <div className="flex gap-10 items-center flex-col lg:flex-row slider-container">
          <Carousel className="w-[100%]">
            <img
              src="assets/slide.png"
              className="w-[100%] h-[200px] lg:h-[500px] rounded-2xl overflow-hidden"
              alt="Slide 1"
            />
             <img
              src="assets/slide2.png"
              className="w-[100%] h-[200px] lg:h-[500px] rounded-2xl overflow-hidden"
              alt="Slide 2"
            />
            {/*<img
              src="assets/slide-3.jpg"
              className="w-[100%] h-[200px] lg:h-[500px] rounded-2xl overflow-hidden"
              alt="Slide 3"
            /> */}
          </Carousel>
        </div>
      </section>
      <section className="py-10 px-1 lg:px-20 xl:px-72 hero">
        <CategoryList />
      </section>
      <section className="products py-10 px-1 xl:px-72 ">
        <AProducts />
      </section>
      <section className="products py-10 px-1 xl:px-72 ">
        <CheapProducts />
      </section>
      <section className="products px-1 xl:px-72 ">
        <Categorys />
      </section>
    </>
  );
};

export default Home;
