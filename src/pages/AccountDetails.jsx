import React, { useEffect, useState } from "react";
import AuthService from "../services/auth.service";
import { Button } from "@material-tailwind/react";
import { AddAddress } from "../components/AddAddress";
import { MdEdit } from "react-icons/md";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-gray-50 p-5 rounded-md">
          <div className="grid grid-cols-1 grid-rows-2 gap-3 border rounded-md p-5 bg-blue-50 hover:shadow-lg transition duration-200">
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
              {/* <Button className="bg-primary w-[80%]">
                Malumotlarni o'zgartirish
              </Button> */}
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-3 border rounded-md p-5 bg-green-50 hover:shadow-lg transition duration-200">
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
          <div className="grid grid-cols-1 grid-rows-2 gap-3 border rounded-md p-5 bg-yellow-50 hover:shadow-lg transition duration-200">
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
      </div>
      <AddAddress handleOpen={handleOpen} open={open} />
    </div>
    // <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //   <div class="lg:text-center">
    //     <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
    //       Profile
    //     </h2>
    //     <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
    //       Welcome, John Doe
    //     </p>
    //     <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
    //       Here you can view and update your profile information.
    //     </p>
    //   </div>
    //   <div class="mt-10">
    //     <div class="grid gap-5 lg:grid-cols-3 lg:max-w-none">
    //       <div
    //         class="rounded-lg border bg-card text-card-foreground shadow-sm"
    //         data-v0-t="card"
    //       >
    //         <div class="flex flex-col space-y-1.5 p-6">
    //           <span class="relative shrink-0 overflow-hidden h-14 w-14 inline-flex items-center justify-center rounded-full bg-blue-500 text-white">
    //             <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
    //               JD
    //             </span>
    //             <span class="sr-only">Profile Image</span>
    //           </span>
    //         </div>
    //         <div class="p-6">
    //           <h3 class="text-lg leading-6 font-medium text-gray-900">
    //             John Doe
    //           </h3>
    //           <p class="mt-2 text-sm text-gray-500">johndoe@example.com</p>
    //           <p class="mt-2 text-sm text-gray-500">+1-202-555-0143</p>
    //         </div>
    //       </div>
    //       <div
    //         class="rounded-lg border bg-card text-card-foreground shadow-sm"
    //         data-v0-t="card"
    //       >
    //         <div class="flex flex-col space-y-1.5 p-6">
    //           <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
    //             Shipping Address
    //           </h3>
    //         </div>
    //         <div class="p-6">
    //           <p class="text-sm text-gray-500">123 Main St</p>
    //           <p class="text-sm text-gray-500">City, State 12345</p>
    //           <p class="text-sm text-gray-500">United States</p>
    //           <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-4">
    //             Edit Address
    //           </button>
    //         </div>
    //       </div>
    //       <div
    //         class="rounded-lg border bg-card text-card-foreground shadow-sm"
    //         data-v0-t="card"
    //       >
    //         <div class="flex flex-col space-y-1.5 p-6">
    //           <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
    //             Payment Methods
    //           </h3>
    //         </div>
    //         <div class="p-6">
    //           <p class="text-sm text-gray-500">•••• •••• •••• 1234</p>
    //           <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-4">
    //             Manage Payments
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="mt-10 lg:text-center">
    //     <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
    //       Cart &amp; Order History
    //     </h2>
    //   </div>
    //   <div class="mt-10">
    //     <div class="grid gap-5 lg:grid-cols-2 lg:max-w-none">
    //       <div
    //         class="rounded-lg border bg-card text-card-foreground shadow-sm"
    //         data-v0-t="card"
    //       >
    //         <div class="flex flex-col space-y-1.5 p-6">
    //           <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
    //             Your Cart
    //           </h3>
    //         </div>
    //         <div class="p-6">
    //           <p class="text-sm text-gray-500">You have 3 items in your cart</p>
    //           <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-4">
    //             View Cart
    //           </button>
    //         </div>
    //       </div>
    //       <div
    //         class="rounded-lg border bg-card text-card-foreground shadow-sm"
    //         data-v0-t="card"
    //       >
    //         <div class="flex flex-col space-y-1.5 p-6">
    //           <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
    //             Order History
    //           </h3>
    //         </div>
    //         <div class="p-6">
    //           <p class="text-sm text-gray-500">
    //             You have made 5 orders in total
    //           </p>
    //           <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-4">
    //             View Orders
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AccountDetails;
