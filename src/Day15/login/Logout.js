import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

const Logout = () => {
  useEffect(() => {
    const se = localStorage.getItem("Kaka");
    console.log(se);
  }, []);
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const [allUses, setAlluser] = useState([]);
  const [name, setName] = useState("sila");
  const [age, setAge] = useState(22);
  const [Email, setEmail] = useState("sila@gmail.com");
  const [Address, setAddress] = useState("Phnom Penh street 2004");
  const InputData = () => {
    const data = {
      name: name,
      age: age,
      Email: Email,
      Address: Address,
    };
    console.log(data);
    setAlluser([...allUses, data]);
    localStorage.setItem("Kaka", [...allUses]);

    setAddress("");
    setAge(0);
    setName("");
    setEmail("");
  };
  // useEffect(() => {
  //   const hg = localStorage.getItem("Kaka");
  //   setAlluser([...allUses, ...hg]);
  // }, [allUses]);
  console.log(allUses);
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="w-full h-screen">
        <table className="w-[90%] mx-auto">
          <thead>
            <tr className="text-white bg-blue-700 text-xl">
              <th
                className="text-start"
                onClick={() => {
                  setCheck(true);
                }}
              >
                Name
              </th>
              <th className="text-start">Age</th>
              <th className="text-start">Email</th>
              <th className="text-start">Address</th>
            </tr>
          </thead>
          <tbody>
            {allUses.map((i, index) => (
              <>
                <tr className="border-b-[2px] " key={index}>
                  <td className="font-bold py-3 ">{i.name}</td>
                  <td className="font-bold py-3 ">{i.age}</td>
                  <td className="font-bold py-3 ">{i.Email}</td>
                  <td className="font-bold py-3 ">{i.Address}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <button
          className="bg-red-700 p-2 rounded-lg px-2 font-bold text-white text-xl"
          onClick={logout}
        >
          Logout{" "}
        </button>
        {check && (
          <div className="w-[25%] h-full bg-blue-300 absolute top-0 mx-auto flex justify-center ">
            <div className="flex flex-col relative">
              <AiFillCloseCircle
                className="text-red-600 text-4xl absolute top-0 -right-20"
                onClick={() => {
                  setCheck(false);
                }}
              />
              <h1 className="font-bold text-3xl text-center ">Input Form</h1>
              <input
                text="text"
                className="mt-5 border-[1px] px-4 py-2 rounded-lg border-black"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="Number"
                className="mt-5 border-[1px] px-4 py-2 rounded-lg border-black"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <input
                text="text"
                className="mt-5 border-[1px] px-4 py-2 rounded-lg border-black"
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                text="text"
                className="mt-5 border-[1px] px-4 py-2 rounded-lg border-black"
                placeholder="Address"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <div className="flex justify-between">
                <button className="px-4 py-2 bg-red-500 font-bold text-md mt-5 rounded-xl text-white">
                  Cancel
                </button>
                <button
                  onClick={InputData}
                  className="px-4 py-2 bg-blue-500 font-bold text-md mt-5 rounded-xl text-white"
                >
                  Input
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Logout;
