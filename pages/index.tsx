import {useState} from "react";
import type {NextPage} from "next";
import Image from "next/image";

import MarqueeText from "../components/MarqueeText";
import Products from "../components/Products";
import header from "../public/header.svg";
import logo from "../public/logo.svg";
import footer from "../public/footer.svg";
import Cart from "../components/Cart";
import {Product} from "../product/types";

const Home: NextPage = () => {
  const [cartMenuOpen, setCartMenuOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<Product[]>([]);

  const addItem = (item: Product) => {
    let found = false;
    let productCopy = [...cart];

    for (let index in productCopy) {
      if (productCopy[index].id == item.id) {
        found = true;
        if (productCopy[index].quantity < 10) {
          productCopy[index].quantity += 1;
          productCopy[index].total = productCopy[index].quantity * productCopy[index].price;
          setCart(productCopy);
          break;
        }
      }
    }
    if (!found) {
      setCart([...cart, item]);
    }
  };

  const handleAddQuantity = (item: Product) => {
    let productCopy = [...cart];

    for (let index in productCopy) {
      if (productCopy[index].id == item.id) {
        if (productCopy[index].quantity <= 10) {
          productCopy[index].quantity += 1;
          productCopy[index].total = productCopy[index].quantity * productCopy[index].price;
          setCart(productCopy);
          break;
        } else {
          break;
        }
      }
    }
  };

  const handleRestQuantity = (item: Product) => {
    let productCopy = [...cart];

    for (let index in productCopy) {
      if (productCopy[index].id == item.id) {
        if (productCopy[index].quantity > 1) {
          productCopy[index].quantity -= 1;
          productCopy[index].total = productCopy[index].quantity * productCopy[index].price;
          setCart(productCopy);
          break;
        } else {
          productCopy.splice(Number(index), 1);
          setCart(productCopy);
        }
      }
    }
  };

  return (
    <div className="h-full w-screen flex flex-col bg-black overflow-x-hidden	">
      <header className="w-full h-auto text-white ">
        <nav className="w-wd90 sm:w-full h-16 m-auto sm:m-0 flex flex-row items-center justify-between pt-4 sm:pt-0 px-0 sm:px-6">
          <span className="hidden sm:flex flex-row w-full h-full  ">
            <Image alt="Basement" src={logo} />
          </span>
          <span className="flex flex-row sm:hidden w-full  justify-between items-center sm:px-6 text-5xl">
            b.
          </span>
          <button
            className="border w-44 py-5 flex items-center justify-center sm:py-0 sm:w-32 h-3/5 px-6 sm:mt-2 border-white rounded-full hover:bg-white hover:text-black duration-300"
            onClick={() => setCartMenuOpen(true)}
          >
            CART (0)
          </button>
        </nav>
        <div className="w-wd90 sm:w-full h-auto flex justify-center m-auto sm:m-0 mt-6 sm:mt-8 ">
          <Image alt="header" className="w-screen" src={header} />
        </div>
        <MarqueeText />
      </header>
      <section className="h-auto sm:h-hcard w-full mt-4 sm:mt-0">
        <Products addItem={addItem} />
      </section>
      <footer className="w-wd90 sm:w-full m-auto mt-4 sm:mt-12 flex justify-center">
        <Image alt="Footer" src={footer} />
      </footer>
      {cartMenuOpen && (
        <div className="w-full sm:w-2/5 h-full sm:h-auto z-50 bg-black absolute sm:right-4 ">
          <Cart
            cart={cart}
            handleAddQuantity={handleAddQuantity}
            handleRestQuantity={handleRestQuantity}
            setCartMenuOpen={setCartMenuOpen}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
