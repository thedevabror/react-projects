import React from "react";

export const Input = ({ placeholder }) => {
  return (
    <>
      <input
        type="text"
        className="border outline-none w-[90%] py-2 placeholder:text-[17px] px-2 text-[20px] rounded-md"
        placeholder={placeholder}
      />
    </>
  );
};

