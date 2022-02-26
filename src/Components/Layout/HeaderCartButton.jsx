import React, { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClickCart }) => {
  const { items } = useContext(CartContext);

  const cartItemNumber = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  const cartButtonHandler = () => {
    return onClickCart(true);
  };

  return (
    <Button
      className={
        "flex items-center justify-around gap-x-3 bg-[#4d1601] py-3 px-12 font-bold text-white hover:bg-[#2c0d00]"
      }
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
