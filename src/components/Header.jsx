import React, { useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "../utils/svgs";
import ProductService from "../services/product.service";
import {
  getCategoryStart,
  getCategorySucces,
  getProductSucces,
} from "../app/slice/products";

let navListMenuItems = [];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ name, _id }) => (
    <Link to={`/category/${_id}`} key={_id}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {name}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-3 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Katalog
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTavrget);
    const value = formData.get("search");
    console.log(value)
  };
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 items-center">
      <NavListMenu />
      <form
        className="relative flex w-full max-w-[24rem]"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input
          type="text"
          label="Qidirish"
          color="purple"
          name="search"
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          className="!absolute right-1 top-1 rounded bg-primary"
          type="submit"
        >
          qidirish
        </Button>
      </form>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  const { productCategories } = useSelector((state) => state.productCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategories = async () => {
      const response = await ProductService.getCategories();
      const res = await ProductService.getAllProducts();
      dispatch(getCategoryStart());
      try {
        dispatch(getCategorySucces(response));
        dispatch(getProductSucces(res));
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, [dispatch]);

  const logined = sessionStorage.getItem("logined");
  const userName = sessionStorage.getItem("username");

  navListMenuItems = productCategories;

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <Navbar className="mx-auto w-full px-4 py-2 shadow-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as={"a"}
            variant="h6"
            href="/"
            className="mr-4 cursor-pointer w-[40%] py-1.5 lg:ml-2"
          >
            E-STORE24
          </Typography>
          <div className="hidden lg:block w-full">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex">
            <Link to={"/cart"}>
              <Button
                variant="text"
                size="md"
                className="flex items-center gap-3 justify-center"
                fullWidth
              >
                <Cart /> <p>Savat</p>
              </Button>
            </Link>
            {logined === "true" ? (
              <Link to={"/user"} className="hover:bg-purple-900">
                <Button className="bg-primary hover:shadow-none shadow-none flex gap-2 items-center hover:bg-purple-200">
                  <FaUserLarge className="text-xl" />
                  <p>{userName}</p>
                </Button>
              </Link>
            ) : (
              <Link to={"auth/login"}>
                <Button size="lg" className="bg-primary" fullWidth>
                  <Link to={"/auth/login"}>Kirish</Link>
                </Button>
              </Link>
            )}
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Link to={"/cart"}>
              <Button
                variant="text"
                size="md"
                className="flex items-center gap-3 justify-center"
                fullWidth
                // onClick={openDrawer}
              >
                <Cart /> <p>Savat</p>
              </Button>
            </Link>
            {logined === "true" ? (
              <Link to={"/user"}>
                <Button className="bg-primary hover:shadow-none shadow-none flex gap-2 items-center">
                  <FaUserLarge className="text-xl" />
                  <p>{userName}</p>
                </Button>
              </Link>
            ) : (
              <Link to={"/auth/login"}>
                <Button size="lg" className="bg-primary" fullWidth>
                  <Link to={"/auth/login"}>Kirish</Link>
                </Button>
              </Link>
            )}
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}
