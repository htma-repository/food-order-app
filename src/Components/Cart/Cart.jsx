import React, { Fragment, useContext } from "react";

import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartList from "./CartList";
import CartContext from "../../store/cart-context";

const Cart = ({ onCartModal, onSetCartModal }) => {
  const context = useContext(CartContext);

  const totalAmountFixed = `$${context.totalPriceAmount.toFixed(2)}`;

  const clickCartHandler = () => {
    onSetCartModal(false);
  };

  const orderItemsHandler = () => {
    return alert("Thanks for your order!");
  };

  const addAmountItemCartHandler = (item) => {
    context.addItem({ ...item, amount: 1 });
  };

  const removeItemCartHandler = (id) => {
    context.removeItem(id);
  };

  const cartItem = context.items.map((item) => {
    return (
      <CartList
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onAddItem={addAmountItemCartHandler.bind(null, item)}
        onRemoveItem={removeItemCartHandler.bind(null, item.id)}
      />
    );
  });
  return (
    <Fragment>
      {onCartModal && (
        <Modal onClickModal={clickCartHandler}>
          <ul className="max-h-80 overflow-scroll py-4 px-6">{cartItem}</ul>
          <div
            className={`flex flex-row items-center  ${
              context.items.length === 0 ? "justify-center" : "justify-between"
            }`}
          >
            {context.items.length === 0 ? (
              <h1 className="text-lg font-bold uppercase text-red-700">
                No Items in Cart
              </h1>
            ) : (
              <Fragment>
                <span className="text-xl font-bold">Total Price</span>
                <span className="text-lg font-semibold">
                  {totalAmountFixed}
                </span>
              </Fragment>
            )}
          </div>
          <div className="flex flex-row justify-end gap-x-2">
            <Button
              className="bg-white py-1 px-4 font-semibold text-[#8a2b06] ring-1 ring-[#8a2b06] hover:bg-[#8a2b06] hover:text-white"
              onClick={clickCartHandler}
            >
              Close
            </Button>
            <Button
              className={`bg-[#8a2b06] py-1 px-4 font-semibold text-white hover:bg-[#4d1601] ${
                context.items.length === 0 ? "hidden" : "block"
              }`}
              onClick={orderItemsHandler}
            >
              Order
            </Button>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

export default Cart;
