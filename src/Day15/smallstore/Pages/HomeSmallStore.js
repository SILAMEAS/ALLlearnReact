import React from "react";
import { CartProvider } from "../usecontext/UseContext";
import Content from "./Content";
import Navbar from "./Navbar";

const HomeSmallStore = () => {
  return (
    <>
      <CartProvider>
        <div className="h-screen w-full">
          <Navbar />

          <Content />
        </div>
      </CartProvider>
    </>
  );
};

export default HomeSmallStore;
