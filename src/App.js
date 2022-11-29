import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ChangeColor from "./Day15/ChangeByWrite/ChangeColor";
import Login from "./Day15/login/Login";
import Logout from "./Day15/login/Logout";
import ProtectedRoute from "./Day15/login/ProtectedRoute";
import HomePage from "./Day15/orderFood/Homepage/HomePage";

import HomeSmallStore from "./Day15/smallstore/Pages/HomeSmallStore";

import Redux from "./ReduxPratice/Redux";
import Test from "./UseContext/test";
function getWindowSize() {
  const Widthinner = window.innerWidth;
  return Widthinner;
}

function App() {
  const [width, setWidth] = useState(getWindowSize());
  console.log(width);
  /// window size
  useEffect(() => {
    function handleWidth() {
      setWidth(getWindowSize);
    }
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  return (
    <>
      <Routes>
        <Route path="/hook" element={<Test />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/orderfood" element={<HomePage />} />
        <Route path="/smallstore" element={<HomeSmallStore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change" element={<ChangeColor />} />

        <Route
          path="/logout"
          element={
            <ProtectedRoute>
              <Logout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
