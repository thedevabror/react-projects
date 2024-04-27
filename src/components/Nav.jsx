import React from "react";
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
  useSelect,
  Input,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BasicInput } from "./input";

// const navListMenuItems = [
//     // {
//     //   title: "Products",
//     //   description: "Find the perfect solution for your needs.",
//     //   icon: SquaresPlusIcon,
//     // },
//     // {
//     //   title: "About Us",
//     //   description: "Meet and learn about our dedication",
//     //   icon: UserGroupIcon,
//     // },
//     // {
//     //   title: "Blog",
//     //   description: "Find the perfect solution for your needs.",
//     //   icon: Bars4Icon,
//     // },
//     // {
//     //   title: "Services",
//     //   description: "Learn how we can help you achieve your goals.",
//     //   icon: SunIcon,
//     // },
//     // {
//     //   title: "Support",
//     //   description: "Reach out to us for assistance or inquiries",
//     //   icon: GlobeAmericasIcon,
//     // },
//     // {
//     //   title: "Contact",
//     //   description: "Find the perfect solution for your needs.",
//     //   icon: PhoneIcon,
//     // },
//     // {
//     //   title: "News",
//     //   description: "Read insightful articles, tips, and expert opinions.",
//     //   icon: NewspaperIcon,
//     // },
//     // {
//     //   title: "Products",
//     //   description: "Find the perfect solution for your needs.",
//     //   icon: RectangleGroupIcon,
//     // },
//     // {
//     //   title: "Special Offers",
//     //   description: "Explore limited-time deals and bundles",
//     //   icon: TagIcon,
//     // },
// ];

let navListMenuItems = [];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ title, _id }) => (
    <Link to={`/category/${_id}`} key={_id}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        {/* <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div> */}
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
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
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
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
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      {/* <Typography
        as="input"
        // href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
    > */}
      <NavListMenu />
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          type="email"
          label="Qidirish"
          // value={email}
          // onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          // color={email ? "gray" : "blue-gray"}
          // disabled={!email}
          className="!absolute right-1 top-1 rounded"
        >
          qidirish
        </Button>
      </div>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  const { productCategories } = useSelector((state) => state.productCategory);

  console.log(productCategories);
  navListMenuItems = productCategories;

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-2xl px-4 py-2 shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          Trendify
        </Typography>
        <div className="hidden lg:block w-full">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" color="blue-gray">
            <Link to={"/login"}>Kirish</Link>
          </Button>
          <Button variant="gradient" size="sm">
            <Link to={"/signup"}>Ro'yxatdan o'tish</Link>
          </Button>
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
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            <Link to={"/login"}>Kirish</Link>
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            <Link to={"/signup"}>Ro'yxatdan o'tish</Link>
          </Button>
        </div>
      </Collapse>
      {/* <hr /> */}
    </Navbar>
  );
}
