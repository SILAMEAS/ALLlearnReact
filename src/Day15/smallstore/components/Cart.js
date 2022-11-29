import React, { useState } from "react";
import { useCartContext } from "../usecontext/UseContext";

const Cart = ({ name, price, img, id, buy }) => {
  const cartcontext = useCartContext();
  const [x, setx] = useState(1);

  const BUY = () => {
    const exited = cartcontext.carsU.find((i) => i.id === id);

    if (!exited) {
      cartcontext.setCarsu([
        ...cartcontext.carsU,
        { name, price, img, id, buy },
      ]);

      cartcontext.setNum(cartcontext.num + 1);
      console.log("dont' have " + x);
    }

    if (exited) {
      cartcontext.setNum(cartcontext.num + 1);

      // cartcontext.carsU.forEach((i) => {
      //   console.log("Duplicate" + i.id + ":" + i.name);
      //   if (i.id === exited) {
      //     setx(x + 1);
      //   }
      cartcontext.carsU.map((i) => {
        i.id === exited ? setx(0) : setx(x + 1);
      });
      console.log(" have " + x);
    }
  };
  return (
    <div>
      <div className="w-full rounded-md overflow-hidden pb-4 cursor-pointer shadow-sm hover:shadow-lg p-2 h-[23rem] lg:h-[25rem] mb-3">
        <img src={img} alt="" className="w-full h-[70%] rounded-md" />
        <div className="mt-2 mx-4">
          <p className="text-slate-400 text-xl">Car</p>
          <p className="font-bold">{name}</p>
          <p className="font-bold">{price}$</p>

          <button
            className="bg-blue-600 px-4  py-1 rounded-lg text-white font-bold"
            onClick={BUY}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
