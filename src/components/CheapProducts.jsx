import React, { useRef, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiMiniStar } from "react-icons/hi2";
import { AddCart } from "../utils/svgs";
import Slider from "react-slick";
import { MdArrowForwardIos } from "react-icons/md";
import { products } from "../data";
import { Link } from "react-router-dom";

const CheapProducts = () => {
  const sliderRef = useRef(null);
  var settings = {
    // dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between">
          <Link className="flex items-center gap-2">
            <h1 className="section-heading mb-0">Arzon narxlar</h1>
            <MdArrowForwardIos className="section-heading" />
          </Link>
          <div className="flex flex-row items-center gap-2">
            <div
              className="cursor-pointer flex items-center justify-center z-[400] border p-1 rounded-full transition-all duration-300 hover:bg-[#dfe1ea]"
              onClick={prevSlide}
            >
              <MdArrowForwardIos className="rotate-[180deg]" />
            </div>
            <div
              className="cursor-pointer flex items-center justify-center z-[400] border p-1 rounded-full transition-all duration-300 hover:bg-[#dfe1ea]"
              onClick={nextSlide}
            >
              <MdArrowForwardIos />
            </div>
          </div>
        </div>
        <Slider {...settings} ref={sliderRef} className="pt-5 flex gap-10">
          {products.map((item) => (
            <div
              key={item.id}
              className="relative transition-all duration-300  hover:shadow hover:bg-white rounded-lg overflow-hidden"
            >
              <div className="absolute top-[3%] z-20 right-4 text-2xl">
                <button>
                  <IoMdHeartEmpty />
                </button>
              </div>
              <div className="product-img overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="object-contain rounded-lg hover:scale-110 transition-all duration-300"
                />
              </div>
              <div className="product-details p-[10px]">
                <h6 className="brand text-[13px] text-primary">
                  {item.brandName}
                </h6>
                <h5 className="text-[12.8px] leading-[15.36px] font-custom">
                  {item.productName}
                </h5>
                <div className="flex items-center gap-1">
                  <HiMiniStar className="text-[#F5A623] text-[14px]" />{" "}
                  <p className="text-[11.2px] text-[#8b8e99]">{item.raiting}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[14px]">${item.price}</p>
                  <button className="border p-1 rounded-full transition-all duration-300 hover:bg-[#dfe1ea]">
                    <AddCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CheapProducts;
