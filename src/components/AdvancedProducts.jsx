import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiMiniStar } from "react-icons/hi2";
import { AddCart } from "../utils/svgs";
import { useSelector } from "react-redux";
import LoadingProduct from "../utils/LoadingProduct";

const AdvancedProducts = () => {
  const { allProducts, isLoading } = useSelector(
    (state) => state.productCategory
  );

  return (
    <>
      {isLoading ? (
        <LoadingProduct />
      ) : (
        <>
          <h1 className="section-heading">Tavsiyalar</h1>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 lg:gap-5  p-[15px]">
            {allProducts
              .filter((item) => item.tags === "cheap")
              .map((item) => (
                <div
                  key={item._id}
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
                        item.images.length !== 0
                          ? item.images[0].url
                          : "assets/product-2.jpg"
                      }
                      alt=""
                      className="object-contain rounded-lg hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="product-details p-[10px]">
                    <h6 className="brand text-[13px] text-primary">
                      {item.brand}
                    </h6>
                    <h5 className="text-[12.8px] leading-[15.36px] font-custom">
                      {item.title}
                    </h5>
                    <div className="flex items-center gap-1">
                      <HiMiniStar className="text-[#F5A623] text-[14px]" />{" "}
                      <p className="text-[11.2px] text-[#8b8e99]">
                        {item.totalrating}
                      </p>
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
          </div>
        </>
      )}
    </>
  );
};

export default AdvancedProducts;
