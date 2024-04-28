// import React, { useState, useEffect } from "react";
// import {
//   Drawer,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";
// import { useSelector } from "react-redux";

// const Dwider = ({ open, setOpen }) => {
//   const [products, setProducts] = useState([])
//   const closeDrawer = () => setOpen(false);
//   const { userCart } = useSelector((state) => state.auth)

//   useEffect(() => {
//     setProducts(userCart.products)
//   }, [userCart])

//   console.log(products)
  
//   return (
//     <>
//       <Drawer
//         open={open}
//         onClose={closeDrawer}
//         className="p-4"
//         placement="right"
//       >
//         <div className="mb-6 flex items-center justify-between">
//           <Typography variant="h5" color="blue-gray">
//             Sizning savatingiz
//           </Typography>
//           <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-5 w-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </IconButton>
//         </div>
//         <div>
//           {products.map(item => (
//             <>
//               <div>
//                 <h1>{item.price}</h1>
//               </div>
//             </>
//           ))}
//         </div>
//       </Drawer>
//     </>
//   );
// };

// export default Dwider;
