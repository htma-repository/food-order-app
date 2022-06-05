import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartItems = {
  items: [],
  totalPriceAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      // Update property totalAmount
      const updatedTotalPriceAmount =
        state.totalPriceAmount + action.payload.price * action.payload.amount;

      // Search index from state item === payload id
      const existingCartItemIndex = state.items.findIndex((item) => {
        // return number of index value (0-n) from array of object state.items
        return item.id === action.payload.id;
      });

      // property items is array of object, search index of items from existingCartItemIndex
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems = null;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        console.log(updatedItems);
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }
      return {
        items: updatedItems,
        totalPriceAmount: updatedTotalPriceAmount,
      };
    case "REMOVE_ITEMS":
      const existingRemoveItemsIndex = state.items.findIndex((item) => {
        return item.id === action.payload;
      });
      const existingItems = state.items[existingRemoveItemsIndex];
      const removedTotalPriceAmount =
        state.totalPriceAmount - existingItems.price;

      let removedItems;

      if (existingItems.amount === 1) {
        removedItems = state.items.filter((item) => item.id !== action.payload);
      } else {
        let removedItem = {
          ...existingItems,
          amount: existingItems.amount - 1,
        };
        removedItems = [...state.items];
        removedItems[existingRemoveItemsIndex] = removedItem;
      }

      return {
        items: removedItems,
        totalPriceAmount: removedTotalPriceAmount,
      };
    case "CLEAR":
      return defaultCartItems;
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

  const clearItemHandler = () => {
    dispatchCart({ type: "CLEAR" });
  };

  const value = {
    items: cartState.items,
    totalPriceAmount: cartState.totalPriceAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearItem: clearItemHandler,
  };

  // useEffect(() => {
  //   const local = localStorage.setItem("cart", JSON.stringify(value));

  //   if()
  // }, []);

  // const getLocal = localStorage.getItem(JSON.parse("cart"));

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
