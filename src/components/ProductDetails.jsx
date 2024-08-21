import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiMiniStar } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { GoPlus } from "react-icons/go";
import { TbMinus } from "react-icons/tb";
import ProductService from "../services/product.service";
import {
  decrement,
  getCategoryStart,
  getProductSucces,
  getSingleProductSucces,
  increment,
} from "../app/slice/products";
import { AddCart } from "../utils/svgs";
import { addCartStart } from "../app/slice/auth";
import AuthService from "../services/auth.service";
import { ToastContainer, toast } from "react-toastify";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { count, allProducts, singleProduct } = useSelector(
    (state) => state.productCategory
  );
  // const [color, setColor] = useState(null);
  const { id } = useParams();
  const idUser = sessionStorage.getItem("id");
  useEffect(() => {
    const getProduct = async () => {
      const res = await ProductService.getSingleProduct(id);
      const respons = await ProductService.getAllProducts();
      // const getColor = await ProductService.getColor();
      // console.log(getColor);
      dispatch(getCategoryStart());
      dispatch(getCategoryStart());
      try {
        dispatch(getSingleProductSucces(res));
        // setColor(getColor);
        console.log(res.color);
        dispatch(getProductSucces(respons));
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [dispatch, id]);

  const addCart = async (singleProduct) => {
    console.log(singleProduct);
    console.log(idUser);
    const data = {
      productId: singleProduct,
      quantity: count,
    };
    dispatch(addCartStart);
    try {
      const response = await AuthService.userCartAdd(data, idUser);
      toast.success("Maxsulot qo'shildi");
      console.log(response);
    } catch (error) {
      toast.error(
        `Xatolik, ${
          error?.response?.data?.message ===
          "There is no token attached to header"
            ? "Oldin hisobingizga kirishingiz kerak"
            : "serverda xatolik"
        }`
      );
      console.log(error);
    }
  };

  console.log(singleProduct._id);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 px-10 py-10 md:grid-cols-2 2xl:px-52">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="h-[100px] flex flex-row lg:flex-col gap-5">
            {singleProduct?.images?.map((img, index) => (
              <img
                key={index}
                src={`https://store24-backend-production.up.railway.app/public/${img.slice(8)}`}
                className="h-[100px] rounded-md"
                alt=""
              />
            ))}
          </div>
          {singleProduct?.images && singleProduct.images.length > 0 && (
            <img
              src={`https://store24-backend-production.up.railway.app/public/${
                singleProduct?.images?.length !== 0
                  ? singleProduct?.images[0]?.slice(8)
                  : "assets/product-2.jpg"
              }`}
              alt=""
              className="w-[100%] h-[100%] lg:w-[400px] md:h-[500px] rounded-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-5 product-detail">
          <div className="flex items-center justify-between w-[100%]">
            <div className="flex items-center gap-5">
              <div className="text-[#8b8e99] text-[13px]">
                <p className="flex items-center gap-1 cursor-pointer">
                  <HiMiniStar className="text-[#F5A623] text-[14px]" />{" "}
                  {/* {singleProduct?.totalrating === 0
                    ? "0.0 Baholar hali yoʻq"
                    : singleProduct?.totalrating} */}
                  0.0 Baholar hali yoʻq
                </p>
              </div>
              <div className="text-[#8b8e99] text-[13px]">
                <p>
                  {singleProduct?.sold === 0
                    ? "Buyurtmalar yo'q"
                    : `${singleProduct?.sold} buyurtma`}
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
              <h1 className="product-heading">{singleProduct?.name}</h1>
            </div>
            <div className="">
              <div className="flex items-center gap-10">
                <div>Brend:</div>
                <div>
                  <a
                    href={`brands/${singleProduct?.brand}`}
                    className="hover:decoration-dashed"
                  >
                    {singleProduct?.brand}
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
            {/* {color?.map((color) => {
              // console.log(color?.title)
              return ( */}
            <div className={`bg-[#000] p-5 rounded-md shadow-md`}></div>
            {/* ); */}
            {/* })} */}
          </div>
          <div className="">
            <p>
              {singleProduct?.category?.name} o'lchami:{" "}
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
                    count === singleProduct?.quantity
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                  disabled={count === singleProduct?.quantity}
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
              {singleProduct?.price === count
                ? singleProduct?.price
                : singleProduct?.price * count}
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mr-10">Mahsulot haqida qisqacha:</p>
            <div
              dangerouslySetInnerHTML={{ __html: singleProduct?.description }}
              className="list-disc"
            />
          </div>
          <div>
            <button
              className="px-10 text-xl button bg-primary hover:bg-primary/85 text-[#fff]"
              onClick={() => addCart(singleProduct.id)}
            >
              Savatga qo'shish
            </button>
          </div>
        </div>
      </div>{" "}
      <ToastContainer autoClose={1000} />
      {/* <div className="px-10 py-10 2xl:px-72">
        <h1 className="section-heading">O'xshash maxsulotlar</h1>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 lg:gap-5  p-[15px]">
          {allProducts
            .filter((item) => item.tags === "cheap")
            .map((item) => (
              <Link
                key={item._id}
                to={`/products/${item._id}`}
                target="_blank"
                className="relative overflow-hidden transition-all duration-300 rounded-lg hover:shadow hover:bg-white"
              >
                <div className="absolute top-[3%] z-20 right-4 text-2xl">
                  <button>
                    <IoMdHeartEmpty />
                  </button>
                </div>
                <div className="overflow-hidden product-img">
                  <img
                    src={
                      item.images.length !== 0
                        ? item.images[0].url
                        : "assets/product-2.jpg"
                    }
                    alt=""
                    className="object-contain transition-all duration-300 rounded-lg hover:scale-110"
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
                  <div className="flex items-center justify-between">
                    <p className="text-[14px]">${item.price}</p>
                    <button className="border p-1 rounded-full transition-all duration-300 hover:bg-[#dfe1ea]">
                      <AddCart />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div> */}
    </>
  );
};

export default ProductDetails;
