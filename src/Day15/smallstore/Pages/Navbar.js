import React, { useState } from "react";
import { BsFillCartDashFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { useCartContext } from "../usecontext/UseContext";
const Navbar = () => {
  const [opencar, setOpenCar] = useState(true);
  const cartcontext = useCartContext();
  const [Tmp, setTmp] = useState([]);
  const [check, setCheck] = useState(false);

  const Unbuy = (id) => {
    cartcontext.setCarsu(cartcontext.carsU.filter((i) => i.id !== id));
  };
  const get = (id) => {
    setTmp(cartcontext.carsU.filter((i) => i.id === id));
    console.log(Tmp);
    setCheck(true);
  };

  return (
    <div className="bg-green-500 ">
      <div className=" h-16 text-white font-bold text-2xl flex justify-between items-center w-[80%] mx-auto">
        <h1>Sell car</h1>
        <div className="relative cursor-pointer">
          <div className="bg-red-600 py-1 px-2  rounded-full text-sm flex justify-center absolute -top-4 -right-4">
            {cartcontext.carsU.length}
          </div>
          <BsFillCartDashFill
            className="lg:text-3xl md:text-3xl"
            onClick={() => {
              setOpenCar(!opencar);
            }}
          />
          <div
            className={`h-80  w-64 absolute top-10 -right-[3rem] lg:-right-[9rem] md:-right-[5rem] flex  flex-col overflow-y-auto ${
              !opencar && "hidden"
            }`}
          >
            {cartcontext.carsU.map((i, index) => {
              return (
                <div
                  className="h-20 mt-2 bg-white rounded-lg p-2 flex  w-[90%] mx-auto justify-between "
                  key={index}
                >
                  <div className="text-black h-100 text-sm overflow-hidden">
                    {" "}
                    <div
                      className="flex relative"
                      onClick={() => {
                        get(i.id);
                      }}
                    >
                      <img
                        src={i.img}
                        alt=""
                        className="w-16 h-16"
                        onClick={() => {
                          setCheck(true);
                          setOpenCar(!opencar);
                        }}
                      />
                      <div className="ml-4">
                        <p className="al">{i.name}</p>
                        <p>${i.price * i.buy}</p>
                      </div>
                      <div className="bg-red-600 py-1 px-2  rounded-full text-sm flex justify-center absolute top-0 text-white">
                        {i.buy}
                      </div>
                    </div>
                  </div>
                  <AiFillCloseCircle
                    className="-ml-9 text-red-700 rounded-lg"
                    onClick={() => {
                      Unbuy(i.id);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {check &&
        Tmp.map((i) => {
          return (
            <div className="bg-black h-[60%] lg:h-[80%] w-full absolute">
              <div className="flex justify-around h-full">
                <div className="relative">
                  {" "}
                  <AiFillCloseCircle
                    className="text-white font-bold text-5xl "
                    onClick={() => {
                      setCheck(false);
                    }}
                  />
                </div>
                <img
                  src={i.img}
                  alt=""
                  className="h-full w-[70%] overflow-hidden"
                />
                <div className="text-white text-center flex flex-col justify-center">
                  <p className="bg-blue-500 text-white rounded-xl">{i.name}</p>
                  <p className="bg-red-700 text-white rounded-xl font-bold mt-10 px-4 py-2">
                    Price : {i.price}$
                  </p>
                  <button className="text-white p-4 bg-green-400 text-3xl rounded-lg font-bold mt-24">
                    buy
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Navbar;
