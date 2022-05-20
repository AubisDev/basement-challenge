import Image from "next/image";
import {useEffect, useState} from "react";

import {Product} from "../product/types";

type cartProp = {
  cart: Product[];
  setCartMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleRestQuantity: (value: Product) => void;
  handleAddQuantity: (value: Product) => void;
};

const Cart = ({handleAddQuantity, handleRestQuantity, cart, setCartMenuOpen}: cartProp) => {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let newSum = 0;

    for (let index in cart) {
      newSum += cart[index].total;
    }
    setSum(newSum);
  }, [cart]);

  return (
    <div className="w-full h-full bg-black border border-white role: ">
      <button
        className="w-full flex justify-end items-end p-5 "
        onClick={() => setCartMenuOpen(false)}
      >
        CLOSE
      </button>
      <h2 className=" w-wd90 text-8xl text-center m-auto font-bold flex justify-center">
        YOUR CART
      </h2>
      <div className="h-full w-full mb-40 ">
        {cart?.map((cartItem) => (
          <div
            key={cartItem.id}
            className=" w-wd90 h-48 flex flex-row m-auto border border-white my-3 "
          >
            <div className="w-40 mr-2 h-full bg-gradient-to-t from-shadcard to-black">
              <Image alt="item1" height={250} src={cartItem.image} width={200} />
            </div>
            <div className="flex flex-col w-2/3 sm:justify-between text-white">
              <div className="w-full flex flex-col ">
                <h6 className="text-xl sm:text-3xl font-bold">{cartItem.item}</h6>
                <p className="text-gray-400 text-sm sm:text-xl">Unisex Basic Softyle T-Shirt</p>
              </div>
              <div className="flex flex-col w-full text-sm sm:text-xl font-bold">
                <p className="">
                  QUANTITY:
                  <button className="px-1" onClick={() => handleRestQuantity(cartItem)}>
                    -
                  </button>
                  {cartItem.quantity}
                  <button className="px-1" onClick={() => handleAddQuantity(cartItem)}>
                    +
                  </button>
                </p>
                <div className="w-full flex flex-row justify-between">
                  <p>SIZE: S M L XL </p>
                  <p className="text-2xl font-semibold tracking-wider pr-2">${cartItem.total}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* adfnjkandfjaskdf */}
      <div className="w-full p-2 flex flex-row absolute bottom-0 ">
        <h4 className="w-3/5 text-2xl font-black flex  p-2 border-t border-r border-white">
          TOTAL: <span className="pl-2 tracking-wider">${sum}</span>
        </h4>
        <button
          className="w-2/5 text-4xl  stroke text-black font-bold flex justify-center border-t border-white m-auto"
          onClick={() => alert("checking")}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
