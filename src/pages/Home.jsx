import React from "react";
import { Link } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import hero from "../assets/hero-2.webp";
import { Women } from "../utils/svgs";

const Home = () => {
  return (
    <>
      <section className="px-10 lg:px-32 hero flex gap-10 items-center py-10 flex-col lg:flex-row">
        <div className="flex flex-col gap-10 lg:w-[50%]">
          <h1 className="text-[60px] font-bold">
            Eng yangi kiyimlarimizni ko'rib chiqing va 40% gacha chegirmada
            oling!
          </h1>
          <h4 className="text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            quas facere velit assumenda libero exercitationem omnis perferendis.
            Deleniti!
          </h4>
          <div className="flex gap-2 items-center">
            <div className="border p-3 bg-primary text-[#fff] rounded-2xl text-[20px]">
              <Link to={"/login"}>Yangi kiyimlarimizni ko'rib chiqing</Link>
            </div>
            <div className="border p-3 rounded-2xl text-[20px]">
              <Link to={"/login"}>Xarid qilish</Link>
            </div>
          </div>
        </div>
        <div>
          <img src={hero} alt="" />
        </div>
      </section>
      <section className="services mt-32 py-10 px-10 lg:px-32  bg-third text-primary">
        <div className="grid grid-cols-2 grid-rows-1 lg:grid-cols-4 gap-5 ">
          <div className="flex gap-5">
            <div className="text-[50px]">
              <TbTruckDelivery />
            </div>
            <h4>
              1 kun ichida <br /> bepul yetkazish
            </h4>
          </div>
          <div className="flex gap-5">
            <div className="text-[50px]">
              <TbTruckDelivery />
            </div>
            <h4>
              1 kun ichida <br /> bepul yetkazish
            </h4>
          </div>
          <div className="flex gap-5">
            <div className="text-[50px]">
              <TbTruckDelivery />
            </div>
            <h4>
              1 kun ichida <br /> bepul yetkazish
            </h4>
          </div>
          <div className="flex gap-5">
            <div className="text-[50px]">
              <TbTruckDelivery />
            </div>
            <h4>
              1 kun ichida <br /> bepul yetkazish
            </h4>
          </div>
        </div>
      </section>
      <section className="categories py-44 px-10 lg:px-32 bg-third text-primary">
        <div className="grid grid-cols-3 bg-white px-5 py-10 rounded-md shadow-lg">
          <Link className="flex gap-5 items-center">
            <div>
              <h3 className="text-[30px]">Womens Clothes</h3>
              <p>8 item</p>
            </div>
            <div>
              <Women />
            </div>
          </Link>
          <Link className="flex gap-5 items-center">
            <div>
              <h3 className="text-[30px]">Womens Clothes</h3>
              <p>8 item</p>
            </div>
            <div>
              <Women />
            </div>
          </Link>
          <Link className="flex gap-5 items-center">
            <div>
              <h3 className="text-[30px]">Womens Clothes</h3>
              <p>8 item</p>
            </div>
            <div>
              <Women />
            </div>
          </Link>
        </div>
      </section>
      <section className="products mt-16 py-10 px-10 lg:px-32">
        <h1 className="section-heading">Featured Collection</h1>
        <div></div>
      </section>
    </>
  );
};

export default Home;
