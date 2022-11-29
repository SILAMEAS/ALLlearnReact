import React, { useState } from "react";
import Cart from "../components/Cart";

const Content = () => {
  const [cars, setCars] = useState([
    {
      type: "car",
      buy: 1,
      id: 1,
      name: "roll roys",
      price: 10000000,
      img: "https://hips.hearstapps.com/hmg-prod/images/2022-rolls-royce-ghost-black-badge-102-1635439026.jpg",
    },
    {
      type: "car",
      buy: 1,
      id: 2,
      name: "Firarri",
      price: 4500000,
      img: "https://www.supercars.net/blog/wp-content/uploads/2022/02/Ferrari-SF90-Stradale-1.jpg",
    },
    {
      type: "car",
      buy: 1,
      id: 3,
      name: "Lambo",
      price: 240000000,
      img: "https://www.topgear.com/sites/default/files/2022/04/1-Lamborghini-Aventador-Ultimae.jpg",
    },
    {
      type: "car",
      buy: 1,
      id: 4,
      name: "NSX",
      price: 240000000,
      img: "https://elitetraveler.com/wp-content/uploads/sites/8/2019/07/Screenshot-2020-05-12-at-15.10.34.png",
    },
    {
      type: "car",
      buy: 1,
      id: 5,
      name: "OD",
      price: 2340000000,
      img: "https://i.pinimg.com/originals/d5/1c/07/d51c07ff9e7f04ab4346c0105c6adfe6.png",
    },
  ]);

  // const [Ucars, setUcars] = useCartContext();
  // console.log(Ucars);
  return (
    <>
      <div className="grid lg:grid-cols-4  md:grid-cols-3 grid-cols-2 w-full mt-10 gap-4 mx-auto">
        {cars.map((items, index) => {
          return (
            <Cart
              name={items.name}
              price={items.price}
              img={items.img}
              key={index}
              id={items.id}
              buy={items.buy}
            />
          );
        })}
      </div>
    </>
  );
};

export default Content;
