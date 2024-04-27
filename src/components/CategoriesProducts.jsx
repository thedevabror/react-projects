import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { base_url } from "../services/baseUrl";
import { MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import { AddCart } from "../utils/svgs";
import { HiMiniStar } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  getCategoryStart,
  getCategorySucces,
  getProductSucces,
} from "../app/slice/products";
import { Link } from "react-router-dom";
import LoadingProduct from "../utils/LoadingProduct";
import ProductService from "../services/product.service";

const CategoriesProducts = () => {
  const { allProducts } = useSelector((state) => state.productCategory);
  const { isLoading } = useSelector((state) => state.productCategory);
  console.log(isLoading);
  var settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  const sliderRef = useRef(null);
  const { productCategories } = useSelector((state) => state.productCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(`${base_url}category`);
      // const res = await axios.get(`${base_url}product`);
      const res = await ProductService.getAllProducts()
      dispatch(getCategoryStart());
      try {
        setTimeout(() => {
          dispatch(getCategorySucces(response.data));
          dispatch(getProductSucces(res));
        }, 5555);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, [dispatch]);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div>
      {isLoading ? (
        <LoadingProduct />
      ) : (
        <>
          {productCategories?.map((item) => {
            return (
              <div className="">
                {allProducts.filter((pro) => pro.category === item.title)
                  .length === 0 ? (
                  <></>
                ) : (
                  <div className="flex items-center justify-between">
                    <Link className="flex items-center gap-2" to={item._id}>
                      <h1 className="section-heading mb-0">{item.title.split(' ').slice(2).join(' ')}</h1>
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
                )}
                <Slider
                  {...settings}
                  ref={sliderRef}
                  className="pt-5 flex gap-10"
                >
                  {allProducts
                    .filter((pro) => pro.category === item.title)
                    .map((i) => (
                      <Link
                        to={`products/${i._id}`}
                        key={i._id}
                        className="relative transition-all duration-300  hover:shadow hover:bg-white rounded-lg overflow-hidden"
                      >
                        <div className="absolute top-[3%] z-20 right-4 text-2xl">
                          <button>
                            <IoMdHeartEmpty />
                          </button>
                        </div>
                        <div className="product-img overflow-hidden">
                          <img
                            src={
                              i.images.length !== 0
                                ? i.images[0].url
                                : "assets/product-2.jpg"
                            }
                            alt=""
                            className="object-contain rounded-lg hover:scale-110 transition-all duration-300"
                          />
                        </div>
                        <div className="product-details p-[10px]">
                          <div className="min-h-[70px]">
                            <h6 className="brand text-[13px] text-primary">
                              {i.brand}
                            </h6>
                            <h5 className="text-[12.8px] leading-[15.36px] font-custom">
                              {i.title}
                            </h5>
                          </div>
                          <div className="flex items-center gap-1">
                            <HiMiniStar className="text-[#F5A623] text-[14px]" />{" "}
                            <p className="text-[11.2px] text-[#8b8e99]">
                              {i.totalrating}
                            </p>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="text-[14px]">${i.price}</p>
                            <button className="border p-1 rounded-full transition-all duration-300 hover:bg-[#dfe1ea]">
                              <AddCart />
                            </button>
                          </div>
                        </div>
                      </Link>
                    ))}
                </Slider>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default CategoriesProducts;
