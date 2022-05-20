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
    <div className="w-full  bg-black  sm:border sm:border-white m-auto  ">
      <button
        className="w-full flex justify-end items-end p-5 "
        onClick={() => setCartMenuOpen(false)}
      >
        CLOSE
      </button>
      <h2 className="bg-black  w-full text-8xl text-center m-auto font-bold flex justify-center">
        YOUR CART
      </h2>
      <div className=" bg-black  h-full w-90vw mb-20 sm:mb-40 ">
        {cart?.map((cartItem) => (
          <div
            key={cartItem.id}
            className=" w-wd90 sm:h-48 flex flex-row m-auto border border-white my-3 "
          >
            <div className="w-40 m-2 sm:m-0 sm:mr-2  h-full bg-gradient-to-t from-shadcard to-black">
              <Image alt="item1" height={350} src={cartItem.image} width={300} />
            </div>
            <div className="flex flex-col w-2/3 justify-evenly sm:justify-between text-white">
              <div className="w-full flex flex-col  ">
                <h6 className="text-xl sm:text-3xl font-bold uppercase">{cartItem.item}</h6>
                <p className="text-gray-400 text-xs  sm:text-xl">Unisex Basic Softyle T-Shirt</p>
              </div>
              <div className="flex flex-col w-full text-sm sm:text-xl font-bold">
                <div className="flex flex-row">
                  QUANTITY:
                  <div className="border border-white rounded-full ml-2 px-1 ">
                    <button className="px-1" onClick={() => handleRestQuantity(cartItem)}>
                      -
                    </button>
                    <span className="px-1">{cartItem.quantity}</span>
                    <button className="px-1" onClick={() => handleAddQuantity(cartItem)}>
                      +
                    </button>
                  </div>
                </div>
                <div className="w-full flex flex-col sm:flex-row justify-between">
                  <p className="py-2">SIZE: S M L XL </p>
                  <p className="text-lg sm:text-2xl font-semibold tracking-wider pr-2">
                    ${cartItem.total}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* adfnjkandfjaskdf */}
      <div className="w-wd90 sm:w-full flex flex-col sm:flex-row absolute bottom-25 sm:border border-white bg-black ">
        <h4 className=" sm:w-3/5 text-2xl font-black flex items-center justify-between border-b sm:border-b-0 sm:border-r border-white py-2 ml-2 ">
          TOTAL <span className="pl-2 tracking-wider">${sum}</span>
        </h4>
        <button
          className="w-full sm:w-2/5 text-5xl sm:text-3xl tracking-wide sm:tracking-normal  py-2 sm:py-0 stroke text-black font-bold flex justify-center m-auto"
          onClick={() => alert("checking")}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
