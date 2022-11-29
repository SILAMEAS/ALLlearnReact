import React from "react";
import { HiShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-red-800 ">
        <div className="w-[80%] mx-auto h-[5rem] flex justify-between items-center ">
          <h1 className="text-white font-bold text-2xl">ReactMeals</h1>
          <div
            className="flex justify-center items-center
          px-8 py-2
          text-sm font-bold text-white rounded-full"
            style={{ backgroundColor: "#0009" }}
          >
            <HiShoppingCart className="text-xl" />

            <p className="ml-2">Your cart</p>
            <p
              className="bg-red-700 
           py-1 px-3 rounded-full ml-2 "
            >
              2
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
