import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiMiniStar } from "react-icons/hi2";
import { AddCart } from "../utils/svgs";
import LoadingProduct from "../utils/LoadingProduct";
import "swiper/css";
import "swiper/css/pagination";

const CategoriesProducts = () => {
  const { allProducts, isLoading } = useSelector(
    (state) => state.productCategory
  );

  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  if (allProducts.length === 0) {
    return (
      <div className="h-auto max-h-screen my-auto">
        <h1 className="text-3xl font-bold text-center">
          Maxsulotlar topilmadi ):
        </h1>
      </div>
    );
  }

  return (
    <div>
      {isLoading ? (
        <LoadingProduct />
      ) : (
        <div>
          <div className="flex items-center justify-between py-5">
            <h1 className="mb-0 section-heading">All Products</h1>
            <div className="flex flex-row items-center gap-2">
              <div
                className="cursor-pointer flex items-center justify-center z-[400] border p-1 rounded-full transition-all duration-300 hover:bg-[#dfe1ea]"
                onClick={handlePrev}
              >
                <MdArrowForwardIos className="rotate-[180deg]" />
              </div>
              <div
                className="cursor-pointer flex items-center justify-center z-[400] border p-1 rounded-full transition-all duration-300 hover:bg-[#dfe1ea]"
                onClick={handleNext}
              >
                <MdArrowForwardIos />
              </div>
            </div>
          </div>
          <Swiper
            ref={swiperRef}
            cssMode={true}
            slidesPerView={5}
            spaceBetween={30}
            keyboard={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Keyboard]}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 40,
              },
            }}
            className="px-10 mySwiper"
          >
            {allProducts.map((i) => (
              <SwiperSlide
                key={i._id}
                className="overflow-hidden border rounded-lg hover:border-gray-400"
              >
                <Link
                  to={`/products/${i._id}`}
                  className="relative transition-all duration-300 hover:shadow hover:bg-white"
                >
                  <div className="absolute w-full top-[1%] z-20 left-24 text-2xl">
                    <button>
                      <IoMdHeartEmpty />
                    </button>
                  </div>
                  <div className="overflow-hidden product-img">
                    <img
                      src={`https://store24-backend-production.up.railway.app/public/${
                        i.images.length !== 0
                          ? i.images[0].slice(8)
                          : "assets/product-2.jpg"
                      }`}
                      alt=""
                      className="object-contain transition-all duration-300 rounded-lg hover:scale-110"
                    />
                  </div>
                  <div className="product-details p-[10px] text-start">
                    <div className="min-h-[70px]">
                      <h6 className="brand text-[13px] text-primary">
                        {/* {i.brand} */}
                      </h6>
                      <h5 className="text-[12.8px] leading-[15.36px] font-custom">
                        {i.name}
                      </h5>
                    </div>
                    <div className="flex items-center gap-1">
                      <HiMiniStar className="text-[#F5A623] text-[14px]" />
                      {/* <p className="text-[11.2px] text-[#8b8e99]">
                        {i.totalrating}
                      </p> */}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-[14px]">${i.price}</p>
                      <button className="border p-1 rounded-full transition-all duration-300 hover:bg-[#dfe1ea]">
                        <AddCart />
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default CategoriesProducts;
