import React from "react";
import Content from "../components/Content";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="h-screen w-full">
        <Navbar />
        <Content />
      </div>
    </>
  );
};

export default HomePage;
