// import { createContext, useContext, useState } from "react";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCartContext = () => {
  return useContext(CartContext);
};
export const CartProvider = ({ children }) => {
  const [carsU, setCarsu] = useState([]);
  const [num, setNum] = useState(0);
  return (
    <CartContext.Provider value={{ carsU, setCarsu, num, setNum }}>
      {children}
    </CartContext.Provider>
  );
};
