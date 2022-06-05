import React, { Fragment, useContext, useState } from "react";
import axios from "axios";

import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartList from "./CartList";
import CartForm from "./CartForm";
import CartFormRef from "./CartFormRef";
import CartContext from "../../store/cart-context";

const Cart = ({ onCartModal, onSetCartModal }) => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

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

  const submitOrderHandler = async (ordersData) => {
    setIsSubmitting(true);
    await axios
      .post(
        "https://food-order-app-c0891-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
        JSON.stringify(ordersData)
      )
      .then((response) => {
        console.log(
          "🚀 ~ file: CartForm.jsx ~ line 98 ~ .then ~ response",
          response.data,
          response.status
        );

        if (response.status === 200) {
          context.clearItem();
        }
      })
      .catch((error) => console.log(error.message));

    setIsSubmitting(false);
    setDidSubmit(true);
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

  const noItemsCart = (
    <h1 className="text-center text-lg font-bold uppercase text-red-700">
      No Items in Cart
    </h1>
  );

  const cartData = (
    <Fragment>
      <ul className={`flex max-h-52 flex-col overflow-y-scroll px-4`}>
        {cartItem}
      </ul>
      <div className={`my-3 flex flex-row items-center justify-between`}>
        <span className="text-xl font-bold">Total Price</span>
        <span className="text-lg font-semibold">{totalAmountFixed}</span>
      </div>
    </Fragment>
  );

  const cartFormInput = (
    <section className="max-h-60 overflow-y-scroll px-4">
      <CartForm onShowForm={setShowForm} onOrder={submitOrderHandler} />
      {/* <CartFormRef onShowForm={setShowForm} onOrder={submitOrderHandler} /> */}
    </section>
  );

  const cartButton = (
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
  );

  const cartModalContent = (
    <Fragment>
      {itemsZero ? noItemsCart : cartData}
      {showForm && !itemsZero ? cartFormInput : cartButton}
    </Fragment>
  );

  const isSubmittingModalContent = (
    <p className="text-center font-semibold">Sending Order Data...</p>
  );
  const didSubmitModalContent = (
    <Fragment>
      <p className="text-center font-semibold">Succsessfully sent the order!</p>
      <Button
        onClick={clickCartHandler}
        className={`mx-auto bg-white py-1 px-4 font-semibold text-[#8a2b06] ring-1 ring-[#8a2b06] hover:bg-[#8a2b06] hover:text-white`}
      >
        Close
      </Button>
    </Fragment>
  );

  return (
    <Fragment>
      {onCartModal && (
        <Modal onClickModal={clickCartHandler}>
          {!isSubmitting && !didSubmit && cartModalContent}
          {isSubmitting && isSubmittingModalContent}
          {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
      )}
    </Fragment>
  );
};

export default Cart;
