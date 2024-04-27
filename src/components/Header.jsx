import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={` bg-white dark:bg-dark  px-10 2xl:px-72`}
    >
      <div className="">
        <div className="relative flex items-center justify-between">
          <div className="max-w-full px-4">
            <a
              href="/#"
              className="block w-full py-5 text-xl font-bold bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent"
            >
              Trendify
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] md:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary dark:bg-white"></span>
              </button>
              <button className="absolute right-0 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 md:hidden">
                h1
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute z-50 right-4 top-full  w-[100%] rounded-lg bg-white px-2 py-2 dark:bg-dark-2 md:static md:block ${
                  !open && "hidden"
                } `}
              >
                <div className="w-[100%] min-[844px]:w-[400px] max-w-[500px] text-center">
                  <div>
                    <input
                      type="text"
                      className="outline-none border border-r-0 p-1 w-[200px] min-[844px]:w-[300px] rounded-tl-md rounded-bl-md"
                    />
                    <button className="border p-1 rounded-tr-md rounded-br-md">
                      qidirish
                    </button>
                  </div>
                </div>
              </nav>
            </div>
            <div className="justify-end pr-16 lg:pr-0 hidden min-[420px]:block">
              <button>
                savat
              </button>
              <Link
                to={"/login"}
                className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
              >
                Kirish
              </Link>

              <Link
                to={"/signup"}
                className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
              >
                Ro'yxatdan o'tish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
