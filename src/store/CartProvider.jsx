import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartItems = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      const updatedItems = state.items.concat(action.items),
        updatedTotalAmount =
          state.totalAmount + action.payload.price * action.payload.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE_ITEMS":
      const removedItems = state.items.filter(
          (item) => item.id !== action.payload.id
        ),
        removedTotalAmount =
          state.totalAmount - action.payload.price * action.payload.amount;
      return {
        items: removedItems,
        totalAmount: removedTotalAmount,
      };
    default:
      return defaultCartItems;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartItems);

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD_ITEMS", payload: item });
  };

  const removeItemHandler = (id) => {
    dispatchCart({ type: "REMOVE_ITEMS", payload: id });
  };

  console.log(cartState);

  const value = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
