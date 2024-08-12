import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartStart, addCartSuccess } from "../app/slice/auth";
import AuthService from "../services/auth.service";
// import { decrement, increment } from "../app/slice/products";
// import { GoPlus } from "react-icons/go";
// import { TbMinus } from "react-icons/tb";
import { Button } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
// import AddCoupon from "../components/AddCoupon";

const Cart = () => {
  const { userCart } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const logined = sessionStorage.getItem("logined");
  const id = sessionStorage.getItem("id");
  const deliveryPrice = 3;

  const dispatch = useDispatch();
  useEffect(() => {
    const getCart = async () => {
      dispatch(addCartStart());
      try {
        const response = await AuthService.userCart(id);
        dispatch(addCartSuccess(response));
        console.log(userCart);
      } catch (error) {}
    };
    getCart();
  }, []);

  const handleDeleteProduct = async (product) => {
    try {
      const response = await AuthService.deleteProductCart(id, product);
      console.log(response);
      window.location.reload();
    } catch (error) {}
  };
  // if (!Array.isArray(userCart.cartItems)) {
  //   console.error("userCart is not an array:", userCart);
  //   return <div>Error: userCart is not an array.</div>;
  // }
  const handleCheckout = async () => {
    if (userCart == {}) {
      return <h1>Savat bo'sh</h1>;
    } else {
      // try {
      //   const response = await AuthService.chaeckOut(id);
      //   console.log("Order created:", response);
      // } catch (error) {
      //   console.error("Error creating order:", error);
      // }
      navigate("/order-details")
    }
  };
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-2 min-h-[80vh]">
      <div className="text-center">
        <h1 className="font-medium text-xl">Shopping Cart</h1>
      </div>
      <div className="hidden items-center justify-between px-2 lg:flex">
        <h1>Maxsulotlar</h1>
        <div className="flex items-center gap-20"></div>
      </div>
      <hr />

      <>
        {logined !== "true" ? (
          <>
            <h1>Oldin hisobingizga kirishingiz kerak</h1>
          </>
        ) : (
          <>
            {userCart?.cartItems?.length === 0 ? (
              <div className="max-w-2xl w-xl m-auto text-center h-full flex flex-col items-center justify-center">
                <h1>Savtingizda maxsulotlar yo'q ):</h1>
                <Link to={"/products"}>
                  <Button>Xaridga o'tish</Button>
                </Link>
              </div>
            ) : (
              <>
                <div className="py-5 m-auto max-w-md md:max-w-[100%] flex flex-col gap-5">
                  {userCart?.cartItems?.map((item) => {
                    return (
                      <div
                        className="flex flex-col md:flex-row justify-between gap-4 px-2 md:gap-8"
                        key={item.product._id}
                      >
                        <div className="flex items-center flex-col sm:flex-row gap-5">
                          <div className="product-img">
                            <img
                              src={`
                             https://store24-backend-production.up.railway.app/public/${
                               item.product.images.length !== 0
                                 ? item.product.images[0].slice(8)
                                 : "assets/product-2.jpg"
                             }
                             `}
                              alt=""
                              className="object-contain sm:w-[100px] md:w-[70px] rounded"
                            />
                          </div>
                          <div className="flex flex-col gap-2 product-details">
                            <Link
                              to={`/products/${item?.product?._id}`}
                              className="font-bold text-primary text-xl"
                            >
                              {item?.product?.name}
                            </Link>
                            <p className="font-medium uppercase">
                              {item?.product?.brand}
                            </p>
                            <p className="text-primary">
                              ${item?.product?.price}
                            </p>
                          </div>
                        </div>
                        <div className="actions">
                          <div className="flex items-center gap-5">
                            {/* <div className="max-w-[120px] py-2 mt-1 border flex items-center rounded px-1 justify-center gap-7">
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
                        count === item?.product?.quantity
                          ? "cursor-not-allowed opacity-50"
                          : ""
                      }`}
                      disabled={count === item?.product?.quantity}
                    >
                      <GoPlus />
                    </button>
                  </div> */}
                            <div className="w-[80px] text-end">
                              <h1 className="product-heading">
                                $
                                {item?.product?.price === item.quantity
                                  ? item?.product?.price
                                  : item?.product?.price * item.quantity}
                              </h1>
                            </div>
                            <div className="px-1 max-w-[120px] py-2">
                              <Button
                                className="bg-transparent rounded-full p-2 hover:shadow-none shadow-none"
                                onClick={() =>
                                  handleDeleteProduct(item?.product?._id)
                                }
                              >
                                <MdDelete className="text-[24px] text-primary " />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                  <div class="flex items-center justify-between w-full mb-6">
                    <p class="font-normal text-xl leading-8 text-gray-400">
                      Maxsulotlar narxi
                    </p>
                    <h6 class="font-semibold text-xl leading-8 text-gray-900">
                      ${userCart?.totalCartPrice}
                    </h6>
                  </div>
                  <div class="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                    <p class="font-normal text-xl leading-8 text-gray-400">
                      Yetkazib berish
                    </p>
                    <h6 class="font-semibold text-xl leading-8 text-gray-900">
                      ${deliveryPrice}.00
                    </h6>
                  </div>
                  <div class="flex items-center justify-between w-full py-6">
                    <p class="font-manrope font-medium text-2xl leading-9 text-gray-900">
                      Ummumiy xisob
                    </p>
                    <h6 class="font-manrope font-medium text-2xl leading-9 text-primary">
                      ${userCart?.totalCartPrice + deliveryPrice}
                    </h6>
                  </div>
                </div>
                <div class="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                  {/* <button
          class="rounded-lg py-2 w-full max-w-[170px] text-primary  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-primary hover:text-white"
          onClick={toggleOpen}
        >
          <span class="px-2 font-semibold text-sm leading-8 ">
            Promokod qo'shish
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
              stroke="#9333EA"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button> */}
                  <button
                    className="rounded-lg w-full max-w-[150px] py-2 text-center justify-center items-center bg-primary font-semibold text-sm text-white flex transition-all duration-500 hover:bg-primary/85"
                    onClick={handleCheckout}
                  >
                    <span className="px-2 font-semibold text-sm leading-8 ">
                      To'lov qilish
                    </span>
                    <svg
                      className="ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                    >
                      <path
                        d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </>
    </div>
  );
};

export default Cart;
