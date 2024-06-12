import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductService from "../services/product.service";
import { IoMdHeartEmpty } from "react-icons/io";
import { AddCart } from "../utils/svgs";
import { HiMiniStar } from "react-icons/hi2";

const SingleCategory = () => {
  const { id } = useParams();
  const [category, setCategory] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const response = await ProductService.getSingleCategory(id);
      console.log(response);
      setCategory(response);
      const res = await ProductService.getAllProducts();
      setAllProducts(res);
    };

    getCategory();
  }, [id]);

  return (
    <>
      <div className="products px-1 py-10 xl:px-80">
        <h1 className="section-heading">{category.name}</h1>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 lg:gap-5  p-[15px]">
          {allProducts
            .filter((item) => item.category === category._id)
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
                    src={`https://abrorkhandev.uz/public/${
                      item.images.length !== 0
                        ? item.images[0].slice(8)
                        : "assets/product-2.jpg"
                    }`}
                    alt=""
                    className="object-contain rounded-lg hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="product-details p-[10px]">
                  <h6 className="brand text-[13px] text-primary">
                    {/* {item.brand} */}
                  </h6>
                  <Link to={`/products/${item._id}`}>
                    <h5 className="text-[12.8px] leading-[15.36px] font-custom">
                      {item.name}
                    </h5>
                  </Link>
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
      </div>
    </>
  );
};

export default SingleCategory;
