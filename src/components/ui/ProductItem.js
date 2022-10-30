import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const ProductItem = ({ product }) => {
  return (
    <div className="p-3 bg-white relative h-full rounded">
      <span>
        <AiOutlinePlus className=" p-2 w-8 h-8 flex absolute top-2 right-2 border shadow-md rounded-lg border-gray-200 text-purple-700 transition-colors bg-white hover:bg-purple-100 items-center justify-center cursor-pointer" />
      </span>
      <img src={product.image} className="w-full" alt="" />
      <div className="text-sm text-brand-color font-semibold text-center">
        ₺{product.price}
      </div>
      <div className="text-sm font-semibold text-center">{product.title}</div>
      <div className="text-sm font-semibold text-center text-gray-500">
        {product.alt}
      </div>
    </div>
  );
};

export default ProductItem;
