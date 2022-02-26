import React from "react";

import MealItemForm from "./MealItemForm";

const MealItem = ({ name, desc, price, id }) => {
  const priceItem = `$${price.toFixed(2)}`;

  return (
    <li className="m-4 flex items-center justify-between border-b border-slate-400 pb-4">
      <div className="flex flex-col gap-y-0.5">
        <h4 className="text-sm font-bold md:text-base">{name}</h4>
        <p className="text-sm italic md:text-base">{desc}</p>
        <span className="font-bold text-red-700">{priceItem}</span>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
