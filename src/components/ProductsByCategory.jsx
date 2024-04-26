import React, { useRef } from "react";
import Slider from "react-slick";
import { AddCart } from "../utils/svgs";
import { HiMiniStar } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { useSelector } from "react-redux";

const ProductsByCategory = ({ item }) => {
  const sliderRef = useRef(null);
  const { allProducts } = useSelector((state) => state.productCategory);
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
  return (
    <></>
  );
};

export default ProductsByCategory;
