import React, { useContext, useState, useEffect } from "react";

import CartIcon from "../Cart/CartIcon";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClickCart }) => {
  const [animation, setAnimation] = useState(false);
  const { items } = useContext(CartContext);

  // Total item amount on header button
  const cartItemNumber = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  const cartButtonHandler = () => {
    return onClickCart(true);
  };

  useEffect(() => {
    items.length === 0 ? setAnimation(false) : setAnimation(true);

    const timer = setTimeout(() => {
      setAnimation(false);
    }, 700);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Button
      className={`flex items-center justify-around gap-x-3 bg-[#4d1601] py-3 px-12 font-bold text-white hover:bg-[#2c0d00] ${
        animation ? "animate-pulse" : ""
      }`}
      type={"button"}
      onClick={cartButtonHandler}
    >
      <span className="h-5 w-5">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="rounded-full bg-[#b94517] py-1 px-4 font-bold hover:bg-[#92320c]">
        {cartItemNumber}
      </span>
    </Button>
  );
};

export default HeaderCartButton;
