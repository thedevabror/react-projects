import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiMiniStar } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { base_url } from "../services/baseUrl";
import { GoPlus } from "react-icons/go";
import { TbMinus } from "react-icons/tb";
import { decrement, increment } from "../app/slice/products";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.productCategory);
  const [color, setColor] = useState(null);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(`${base_url}product/${id}`);
      setProduct(res.data);
    };
    getProduct();
    // const getColor = async () => {
    //   const { data } = await axios.get(`${base_url}color/${product?.color}`);
    //   console.log(data.title);
    //   setColor(data.title);
    // };

    // console.log(getColor)
    // getColor();
  }, []);

  console.log("Found product", product);

  console.log("ID for params:", id);
  return (
    <>
      <div className="grid grid-cols-1 min-[800px]:grid-cols-2  gap-20 py-32 px-10 2xl:px-72">
        <div className="flex flex-col gap-10">
          {product?.images && product.images.length > 0 && (
            <img
              src={product.images[0].url}
              alt=""
              className="object-contain rounded-md"
            />
          )}
          <div className="h-[100px]">
            {product?.images?.map((img, index) => (
              <img
                key={index}
                src={img.url}
                className="h-[100px] rounded-md"
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="product-detail flex flex-col gap-10">
          <div className="flex items-center justify-between w-[100%] mb-[6px]">
            <div className="flex gap-5 items-center">
              <div className="text-[#8b8e99] text-[13px]">
                <p className="flex items-center gap-1 cursor-pointer">
                  <HiMiniStar className="text-[#F5A623] text-[14px]" />{" "}
                  {product?.totalrating === 0
                    ? "0.0 Baholar hali yoʻq"
                    : product?.totalrating}
                </p>
              </div>
              <div className="text-[#8b8e99] text-[13px]">
                <p>
                  {product?.sold === 0
                    ? "Buyurtmalar yo'q"
                    : `${product?.sold} buyurtma`}
                </p>
              </div>
            </div>
            <div className="text-[14px]">
              <button className="flex items-center gap-2">
                <IoMdHeartEmpty className="text-xl" />
                <p className="hidden min-[965px]:block">Istaklarga</p>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="product-heading">{product?.title}</h1>
            </div>
            <div className="">
              <div className="flex items-center gap-10">
                <div>Brend:</div>
                <div>
                  <a
                    href={`brands/${product?.brand}`}
                    className="hover:decoration-dashed"
                  >
                    {product?.brand}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div>Yetkazib berish:</div>
                <div className="text-[#8b8e99] text-[14px]">
                  <p>3 kun, bepul</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex items-center gap-10">
            <div>Ranglari:</div>
            <div className={`bg-[${color}] p-5 rounded-md`}></div>
          </div>
          <div className="">
            <p>
              {product?.category} o'lchami:{" "}
              <span className="font-bold">25(42-44)</span>
            </p>
          </div>
          <div className="flex flex-col">
            <p>Miqdori:</p>
            <div>
              <div className="max-w-[120px] py-2 mt-1 border flex items-center rounded px-1 justify-center gap-7">
                <button
                  onClick={() => dispatch(decrement())}
                  className={`${
                    count === 1 ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  disabled={count === 1}
                >
                  <TbMinus />
                </button>
                {count}
                <button
                  onClick={() => dispatch(increment())}
                  className={`${
                    count === product?.quantity
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                  disabled={count === product?.quantity}
                >
                  <GoPlus />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p>Narx:</p>
            <h1 className="section-heading">
              $
              {product?.price == count
                ? product?.price
                : product?.price * count}
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mr-10">Mahsulot haqida qisqacha:</p>
            <div
              dangerouslySetInnerHTML={{ __html: product?.description }}
              className="list-disc"
            />
          </div>
          <div>
            <button className="px-10 border text-xl button bg-purple-600 hover:bg-primary/85 text-[#fff]">Savatga qo'shish</button>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default ProductDetails;
