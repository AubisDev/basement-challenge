import Image from "next/image";
import {useState} from "react";

import data from "../product/mock.json";
import {Product} from "../product/types";

type setCartProp = {
  addItem: (value: Product) => void;
};

const Products = ({addItem}: setCartProp) => {
  const [products, setProducts] = useState<Product[]>(data.products);
  const itemStyle: string =
    "bg-gradient-to-t from-shadcard to-black h-full w-full flex flex-col group";
  const descriptionSytle: string =
    "w-full flex justify-between border-t-2 border-white bg-black py-2 text-lg text-white";

  return (
    <div className="w-full h-full px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8  ">
      {products?.map((product) => (
        <button key={product.id} className={itemStyle} onClick={() => addItem(product)}>
          <Image alt="shirt" height={600} src={product.image} width={500} />
          <div className={descriptionSytle}>
            <p>{product.item}</p>
            <p>{`$${product.price}`}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Products;
