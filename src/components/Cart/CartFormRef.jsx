import React, { useContext, useRef, useState } from "react";
import { v4 } from "uuid";

import Form from "../UI/Form";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";

const validateInput = (value) => value.trim() === "";
const fiveDigits = (value) => value.trim().length === 5;

const uuidV4 = v4();

const CartForm = (props) => {
  const [inputIsValid, setInputIsValid] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const context = useContext(CartContext);

  const totalPriceAmountToFixed = `${context.totalPriceAmount.toFixed(2)}`;

  const formInputRef = useRef();
  const enteredNameRef = useRef();
  const enteredStreetRef = useRef();
  const enteredPostalRef = useRef();
  const enteredCityRef = useRef();

  const cancelOrderHandler = () => {
    props.onShowForm(false);
  };

  const resetForm = () => {
    return formInputRef.current.reset;
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = enteredNameRef.current.value;
    const enteredStreet = enteredStreetRef.current.value;
    const enteredPostal = enteredPostalRef.current.value;
    const enteredCity = enteredCityRef.current.value;

    const enteredNameIsValid = !validateInput(enteredName);
    const enteredStreetIsValid = !validateInput(enteredStreet);
    const enteredPostalIsValid = fiveDigits(enteredPostal);
    const enteredCityIsValid = !validateInput(enteredCity);

    setInputIsValid({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const allFormIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!allFormIsValid) {
      return;
    }

    const orders = {
      id: uuidV4,
      name: enteredName,
      amount: context.items,
      totalAmount: totalPriceAmountToFixed,
      address: {
        street: enteredStreet,
        postal: enteredPostal,
        city: enteredCity,
      },
    };

    props.onOrder(orders);

    resetForm();
  };

  const invalidOutput = (invalid, invalidText) => {
    return invalid && <p className="text-xs text-red-600">{invalidText}</p>;
  };

  const forms = [
    {
      id: "name",
      name: "Name",
      refs: enteredNameRef,
      invalid: !inputIsValid.name,
      invalidText: "Name must not be empty!",
    },
    {
      id: "street",
      name: "Street",
      refs: enteredStreetRef,
      invalid: !inputIsValid.street,
      invalidText: "Street must not be empty!",
    },
    {
      id: "postal",
      name: "Postal",
      refs: enteredPostalRef,
      invalid: !inputIsValid.postal,
      invalidText: "Postal must not be empty!",
    },
    {
      id: "city",
      name: "City",
      refs: enteredCityRef,
      invalid: !inputIsValid.city,
      invalidText: "City must not be empty!",
    },
  ];

  const allForms = forms.map((form) => {
    return (
      <div className="mb-2 flex flex-col gap-1.5" key={form.id}>
        <Form
          children={form.name}
          id={form.id}
          type={"text"}
          className={"rounded border-none p-1 outline-none ring-1 focus:ring-2"}
          refs={form.refs}
        />
        {invalidOutput(form.invalid, form.invalidText)}
      </div>
    );
  });

  const buttonForm = (
    <div className="my-4 flex flex-row justify-end gap-x-2">
      <Button
        type={"button"}
        onClick={cancelOrderHandler}
        className={
          "bg-white py-1 px-4 font-semibold text-[#8a2b06] ring-1 ring-[#8a2b06] hover:bg-[#8a2b06] hover:text-white"
        }
      >
        Cancel
      </Button>
      <Button
        className="bg-[#8a2b06] py-1 px-4 font-semibold text-white
          hover:bg-[#4d1601]"
      >
        Confirm
      </Button>
    </div>
  );

  return (
    <form onSubmit={formSubmitHandler} ref={formInputRef}>
      {allForms}
      {buttonForm}
    </form>
  );
};

export default CartForm;
