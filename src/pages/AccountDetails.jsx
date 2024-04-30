import React, { useEffect, useState } from "react";
import AuthService from "../services/auth.service";
import { Button } from "@material-tailwind/react";
import { AddAddress } from "../components/AddAddress";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const AccountDetails = () => {
  const [userData, setUserData] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const user = sessionStorage.getItem("username");
  const id = sessionStorage.getItem("id");
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await AuthService.getUser(id);
        setUserData(response.data);
        console.log(userData?.getSingleUser);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return (
    <div className="py-10 px-5 md:px-10 2xl:px-80 flex flex-col gap-5">
      <h1 className="text-center">PROFILE</h1>
      <div className="flex flex-col gap-5">
        <h1 className="text-center font-black text-xl">
          Xush kelibsiz, {user}
        </h1>
        <p className="text-center text-gray-500 font-light">
          Bu yerda siz o'z profilingiz ma'lumotlarini ko'rishingiz va
          yangilashingiz mumkin.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-gray-50 p-5 rounded-md shadow">
          <div className="grid grid-cols-1 grid-rows-2 gap-3 border rounded-md p-5 bg-white hover:shadow-lg transition duration-200">
            <div className="flex justify-between items-center">
              <div className="border border-white rounded-full w-[45px] h-[45px] flex items-center justify-center bg-blue-50">
                <p className="text-3xl text-primary font-bold">
                  {user.slice(0, 1)}
                </p>
              </div>
              <div className="px-1 max-w-[120px] py-2">
                <Button className="bg-primary rounded-full p-[10px]">
                  <MdEdit className="text-[24px] text-white " />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-primary">
                {userData?.getSingleUser?.firstname}{" "}
                {userData?.getSingleUser?.lastname}
              </h1>
              <p className="text-xs">{userData?.getSingleUser?.email}</p>
              <p className="text-xs">{userData?.getSingleUser?.mobile}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-3 border rounded-md p-5 bg-white hover:shadow-lg transition duration-200">
            <div>
              <p className="text-md font-bold">Yetkazib berish manzili</p>
            </div>
            <div className="flex flex-col gap-1">
              {userData?.getSingleUser?.address?.length === 0 ? (
                <div className="flex flex-col gap-2">
                  <h1>Sizda manzil yo'q :(</h1>
                  <Button className="bg-primary w-[70%]" onClick={handleOpen}>
                    Manzil qo'shish
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <h1>
                    Manzilingiz: {userData?.getSingleUser?.address[0].address}
                  </h1>
                  <Button
                    className="bg-primary w-[70%]"
                    onClick={() =>
                      handleOpen(userData?.getSingleUser?.address[0].address)
                    }
                  >
                    O'zgartirish
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-3 border rounded-md p-5 bg-white hover:shadow-lg transition duration-200">
            <div>
              <p className="text-md font-bold">To'lov usullari</p>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <p>•••• •••• •••• 1234</p>
              </div>
              <div>
                <Button className="bg-primary">To'lovlarni boshqarish</Button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-primary">Savat va Buyurtmalar tarixi</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-50 p-5 rounded-md shadow">
          <div className="grid grid-cols-1 grid-rows-2 gap-3 border rounded-md p-5 bg-white hover:shadow-lg transition duration-200">
            <div className="">
              <h1>Sizning savatingiz</h1>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-500">
                Savatingizda 3 ta maxsulot bor
              </p>
              <Link to={"/cart"}>
                <Button className="bg-primary w-[60%]">Savatni ko'rish</Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-3 border rounded-md p-5 bg-white hover:shadow-lg transition duration-200">
            <div className="">
              <h1>Buyurtma tarixi</h1>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-500">
                Siz jami 5ta buyurtma berdingiz 
              </p>
              <Link to={"/cart"}>
                <Button className="bg-primary w-[60%]">Buyurtmalarni ko'rish</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AddAddress handleOpen={handleOpen} open={open} />
    </div>
  );
};

export default AccountDetails;
