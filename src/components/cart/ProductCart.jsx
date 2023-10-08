import React from "react";
import { AiFillStar, AiOutlineShopping, AiOutlineStar } from "react-icons/ai";

const ProductCart = ({ img, name, price }) => {
  return (
    <>
      <div className="border border-gray-200 hover:border-gray-200 hover:scale-105 ease-linear rounded-lg duration-300 transition-transform  relative">
        <img src={img} alt={name} />
        <div className="space-y-2 relative p-4">
          <div className="text-yellow-400 flex gap-[2px] text-[20px]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-2xl font-medium text-red-600">{price}</p>
          <div className="absolute -top-1 right-2 bg-green-600 text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer">
            <AiOutlineShopping />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
