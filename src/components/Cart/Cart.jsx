import React, { Fragment, useContext, useState } from "react";

import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartList from "./CartList";
import CartForm from "./CartForm";
import CartContext from "../../store/cart-context";

const Cart = ({ onCartModal, onSetCartModal }) => {
  const [showForm, setShowForm] = useState(false);

  const context = useContext(CartContext);

  const totalAmountFixed = `$${context.totalPriceAmount.toFixed(2)}`;

  const clickCartHandler = () => {
    onSetCartModal(false);
  };

  const orderItemsHandler = () => {
    setShowForm(true);
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

  const itemsZero = context.items.length === 0;

  return (
    <Fragment>
      {onCartModal && (
        <Modal onClickModal={clickCartHandler}>
          {itemsZero ? (
            <h1 className="text-center text-lg font-bold uppercase text-red-700">
              No Items in Cart
            </h1>
          ) : (
            <Fragment>
              <ul className={`flex max-h-52 flex-col overflow-y-scroll px-4`}>
                {cartItem}
              </ul>
              <div
                className={`my-3 flex flex-row items-center justify-between`}
              >
                <span className="text-xl font-bold">Total Price</span>
                <span className="text-lg font-semibold">
                  {totalAmountFixed}
                </span>
              </div>
            </Fragment>
          )}
          {showForm && !itemsZero ? (
            <section className="max-h-60 overflow-y-scroll px-4">
              <CartForm onShowForm={setShowForm} />
            </section>
          ) : (
            <div className="flex flex-row justify-end gap-x-2">
              <Button
                className={`bg-white py-1 px-4 font-semibold text-[#8a2b06] ring-1 ring-[#8a2b06] hover:bg-[#8a2b06] hover:text-white ${
                  itemsZero ? "mx-auto mt-2" : ""
                }`}
                onClick={clickCartHandler}
              >
                Close
              </Button>
              <Button
                className={`bg-[#8a2b06] py-1 px-4 font-semibold text-white hover:bg-[#4d1601] ${
                  itemsZero ? "hidden" : "block"
                }`}
                onClick={orderItemsHandler}
              >
                Order
              </Button>
            </div>
          )}
        </Modal>
      )}
    </Fragment>
  );
};

export default Cart;
