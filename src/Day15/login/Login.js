import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkProcess = () => {
    console.log(username + "/" + password);

    if (username === "sila" && password === "123") {
      console.log("success");
      localStorage.setItem("NP", true);
      navigate("/logout");
      localStorage.setItem("token", "dsdfsdfsdfsdfsd");
    } else {
      localStorage.setItem("NP", false);
    }

    console.log(localStorage.getItem("NP"));
    setUsername("");
    setPassword("");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/logout");
    }
  }, []);
  return (
    <div className="h-screen w-full flex justify-center">
      <div className="w-full flex flex-col justify-center items-center mx-auto">
        <h1 className="font-bold text-3xl mb-3">Login Form</h1>
        <input
          type="text"
          className="p-2 bg-blue-100
        border-2  border-black text-black font-bold text-xl mb-3"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="p-2 bg-blue-100
        border-2  border-black text-black font-bold text-xl mb-3"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="bg-green-500 py-2 px-8 rounded-lg text-white font-bold">
          <button onClick={checkProcess}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
