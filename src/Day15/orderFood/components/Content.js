import React from "react";

const Content = () => {
  return (
    <>
      <div className="w-full h-screen bg-black overflow-y-hidden">
        <img
          src="https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/hut-meal-for-4.f281e1a2e38ab3cd16abb1d256bcc28e.1.jpg"
          alt="logoPizza"
          className="object-cover w-full h-[30%]"
        />
        <div className="flex justify-center relative">
          <div className="w-full flex flex-col justify-center items-center absolute -top-16">
            <div className="w-[50%] bg-zinc-700 rounded-xl text-white  p-4 ">
              <h1 className="text-xl font-bold text-center mb-2">
                Delicious Food, Delivered To You
              </h1>
              <p className="text-center">
                Choose your favorite meal from our broad selection of available
                meals and enjoy a delicious
                <br />
                lunch or dinner at home.{" "}
              </p>
              <p className="text-center">
                All our meals are cooked with high-auality
                ingredients,just-in-time and of coures by <br /> experienced
                chefs
              </p>
            </div>
            <div className="w-[60%] bg-white px-8 py-4 rounded-xl mt-5">
              <div className="border-b-2 pb-2 flex justify-between items-center">
                <div>
                  <p className="font-bold">Sushi</p>
                  <p className="">Finest fist and veggies</p>
                  <p className="text-red-600 font-bold">$22.99</p>
                </div>
                <div>
                  <div className="flex">
                    <p className="font-bold mr-2">Amount</p>
                    <input
                      type="text"
                      className="border-2 w-10 h-7  rounded-md"
                      value="1"
                    />
                  </div>
                  <p className="bg-red-900 font-bold text-white rounded-full flex justify-center w-[5rem] ml-4 mt-1">
                    +Add
                  </p>
                </div>
              </div>
              <div className="border-b-2 pb-2 flex justify-between items-center">
                <div>
                  <p className="font-bold">Sushi</p>
                  <p className="">Finest fist and veggies</p>
                  <p className="text-red-600 font-bold">$22.99</p>
                </div>
                <div>
                  <div className="flex">
                    <p className="font-bold mr-2">Amount</p>
                    <input
                      type="text"
                      className="border-2 w-10 h-7  rounded-md"
                      value="1"
                    />
                  </div>
                  <p className="bg-red-900 font-bold text-white rounded-full flex justify-center w-[5rem] ml-4 mt-1">
                    +Add
                  </p>
                </div>
              </div>
              <div className="border-b-2 pb-2 flex justify-between items-center">
                <div>
                  <p className="font-bold">Sushi</p>
                  <p className="">Finest fist and veggies</p>
                  <p className="text-red-600 font-bold">$22.99</p>
                </div>
                <div>
                  <div className="flex">
                    <p className="font-bold mr-2">Amount</p>
                    <input
                      type="text"
                      className="border-2 w-10 h-7  rounded-md"
                      value="1"
                    />
                  </div>
                  <p className="bg-red-900 font-bold text-white rounded-full flex justify-center w-[5rem] ml-4 mt-1">
                    +Add
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
