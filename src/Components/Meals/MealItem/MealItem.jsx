import React, { useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const addAmountToCartHandler = (amount) => {
    return cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className="m-4 flex items-center justify-between border-b border-slate-400 pb-4">
      <div className="flex flex-col gap-y-0.5">
        <h4 className="text-sm font-bold md:text-base">{props.name}</h4>
        <p className="text-sm italic md:text-base">{props.desc}</p>
        <span className="font-bold text-red-700">{`$${props.price.toFixed(
          2
        )}`}</span>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          onAddAmountToCart={addAmountToCartHandler}
        />
      </div>
    </li>
  );
};

export default MealItem;
