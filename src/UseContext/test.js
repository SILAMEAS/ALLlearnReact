import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

const Test = () => {
  const them = useTheme();
  const updateTheme = useThemeUpdate();

  console.log(them);
  const checkColor = {
    backgroundColor: them ? "red" : "blue",
  };
  // console.log(updateTheme);

  return (
    <>
      <h1 className={`font-bold text-2xl text-center  `} style={checkColor}>
        Content Testing ${them}
      </h1>
      <button
        className="bg-blue-400 text-white font-bold py-2 px-4 rounded-lg"
        onClick={updateTheme}
      >
        Change Color
      </button>
    </>
  );
};

export default Test;
