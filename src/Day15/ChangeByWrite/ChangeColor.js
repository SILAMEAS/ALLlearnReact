import React, { useRef, useState } from "react";

const ChangeColor = () => {
  const [color, setColor] = useState("");
  const refonText = useRef();

  const changeColorbybutton = () => {
    refonText.current.style.color = color;
  };

  return (
    <>
      <div className="flex justify-center flex-col mx-auto w-[30%]">
        <div className="text-5xl font-bold  mt-8" ref={refonText}>
          ChangeColor
        </div>
        <input
          type="text"
          placeholder="color"
          className="border-2 border-black"
          onChange={(e) => setColor(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-700 text-white rounded-lg text-xl"
          onClick={changeColorbybutton}
        >
          change
        </button>
      </div>
    </>
  );
};

export default ChangeColor;
