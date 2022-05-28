import React from "react";

import Button from "../UI/Button";

const CartList = ({ id, name, price, amount, onAddItem, onRemoveItem }) => {
  return (
    <li
      className="flex flex-row items-center justify-between border-b border-slate-400"
      key={id}
    >
      <div className="flex flex-col justify-start">
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="mb-2 flex flex-row items-center justify-center gap-x-6">
          <span className="text-sm font-semibold text-red-800">
            {`$${price.toFixed(2)}`}
          </span>
          <span className="rounded py-0.5 px-2 text-sm ring-1 ring-red-700">
            x{amount}
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-x-3">
        <Button
          className={
            "rounded py-0.5 px-3 font-semibold text-[#8a2b06] ring-1 ring-red-700 hover:bg-red-700 hover:text-white"
          }
          onClick={onRemoveItem}
        >
          -
        </Button>
        <Button
          className={
            "rounded py-0.5 px-3 font-semibold text-[#8a2b06] ring-1 ring-red-700 hover:bg-red-700 hover:text-white"
          }
          onClick={onAddItem}
        >
          +
        </Button>
      </div>
    </li>
  );
};

export default CartList;
