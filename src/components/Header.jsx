import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../utils";

const Header = () => {
  return (
    <>
      <div className="px-10 lg:px-32 flex justify-between items-center pt-10 py-3">
        <div>
          <a href="" className="text-primary font-bold text-2xl">
            Trendify-clothes.uz
          </a>
        </div>
        <div className="header-links flex items-center gap-20 font-bold text-[20px] transition-all ease-linear duration-200">
          <Link className="hover:text-primary transition-all ease-linear duration-200">For women</Link>
          <Link className="hover:text-primary transition-all ease-linear duration-200">For men</Link>
          <Link className="hover:text-primary transition-all ease-linear duration-200">For children</Link>
        </div>
        <div className="header-buttons flex items-center gap-10">
          <Input />
          <div className="flex gap-2 items-center"> 
            <div className="border p-3 rounded-2xl text-[20px]">
              <Link to={"/login"}>Log In </Link>
            </div>
            <div className="border p-3 bg-primary text-[#fff] rounded-2xl text-[20px]">
              <Link to={"/login"}>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
