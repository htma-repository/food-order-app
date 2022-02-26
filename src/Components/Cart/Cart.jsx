import React, { Fragment } from "react";
import Button from "../UI/Button";

import Modal from "../UI/Modal";

const Cart = ({ onCartModal, onSetCartModal }) => {
  const clickCartHandler = () => {
    onSetCartModal(false);
  };
  const cartItem = [
    {
      id: "m1",
      name: "Sushi",
      amount: 2,
      price: 29.99,
    },
    {
      id: "m2",
      name: "Barbecue",
      amount: 3,
      price: 39.99,
    },
  ].map((item) => {
    return (
      <li
        className="flex flex-row items-center justify-between border-b border-slate-400"
        key={item.id}
      >
        <div className="flex flex-col justify-start">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <div className="mb-2 flex flex-row items-center justify-center gap-x-6">
            <span className="text-sm font-semibold text-red-800">
              ${item.price}
            </span>
            <span className="rounded-sm py-0.5 px-2 text-sm ring-1 ring-red-700">
              {item.amount}
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-x-3">
          <Button
            className={
              "py-0.5 px-3 font-semibold text-[#8a2b06] ring-1 ring-red-700 hover:bg-red-700 hover:text-white"
            }
          >
            -
          </Button>
          <Button
            className={
              "py-0.5 px-3 font-semibold text-[#8a2b06] ring-1 ring-red-700 hover:bg-red-700 hover:text-white"
            }
          >
            +
          </Button>
        </div>
      </li>
    );
  });
  return (
    <Fragment>
      {onCartModal && (
        <Modal onClickModal={clickCartHandler}>
          <ul>{cartItem}</ul>
          <div className="flex flex-row items-center justify-between">
            <span className="text-xl font-bold">Total Amount</span>
            <span className="text-lg font-semibold">$89.99</span>
          </div>
          <div className="flex flex-row justify-end gap-x-2">
            <Button
              className="bg-white py-1 px-4 font-semibold text-[#8a2b06] ring-1 ring-[#8a2b06] hover:bg-[#8a2b06] hover:text-white"
              onClick={clickCartHandler}
            >
              Close
            </Button>
            <Button className="bg-[#8a2b06] py-1 px-4 font-semibold text-white hover:bg-[#4d1601]">
              Order
            </Button>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

export default Cart;
