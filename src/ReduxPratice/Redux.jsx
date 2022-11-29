import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/counter/counterSlice";

const Redux = () => {
  const c = useSelector((state) => state.coT.value);
  const dis = useDispatch();
  const a = useState(3);
  const result = c - a;

  return (
    <>
      <p className="text-xl text-blue-600 font-bold">
        Redux= {c}-{a}={result}
      </p>
      <button
        className="bg-red-900 py-2 px-8 text-white rounded-full"
        onClick={() => {
          dis(increment());
        }}
      >
        increament
      </button>
      <button
        className="bg-red-900 py-2 px-8 text-white rounded-full"
        onClick={() => {
          dis(decrement());
        }}
      >
        descreament
      </button>
      <button
        className="bg-red-900 py-2 px-8 text-white rounded-full"
        onClick={() => {
          dis(incrementByAmount(10));
        }}
      >
        incream10
      </button>
    </>
  );
};

export default Redux;
