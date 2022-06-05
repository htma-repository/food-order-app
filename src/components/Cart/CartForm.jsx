import React, { useContext } from "react";
import { v4 } from "uuid";

import Form from "../UI/Form";
import Button from "../UI/Button";
import useForm from "../hooks/use-form";
import CartContext from "../../store/cart-context";

const validateInput = (value) => value.trim() !== "";
const uuidV4 = v4();

const CartForm = (props) => {
  const context = useContext(CartContext);
  const {
    inputForm: nameInputForm,
    inputIsValid: nameInputIsValid,
    inputIsInvalid: nameInputIsInvalid,
    inputFormHandler: nameInputFormHandler,
    inputBlurHandler: nameInputBlurHandler,
    InputReset: nameReset,
  } = useForm(validateInput);

  const {
    inputForm: streetInputForm,
    inputIsValid: streetInputIsValid,
    inputIsInvalid: streetInputIsInvalid,
    inputFormHandler: streetInputFormHandler,
    inputBlurHandler: streetInputBlurHandler,
    InputReset: streetReset,
  } = useForm(validateInput);

  const {
    inputForm: postalInputForm,
    inputIsValid: postalInputIsValid,
    inputIsInvalid: postalInputIsInvalid,
    inputFormHandler: postalInputFormHandler,
    inputBlurHandler: postalInputBlurHandler,
    InputReset: postalReset,
  } = useForm(validateInput);

  const {
    inputForm: cityInputForm,
    inputIsValid: cityInputIsValid,
    inputIsInvalid: cityInputIsInvalid,
    inputFormHandler: cityInputFormHandler,
    inputBlurHandler: cityInputBlurHandler,
    InputReset: cityReset,
  } = useForm(validateInput);

  let allFormIsValid = false;

  if (
    nameInputIsValid &&
    streetInputIsValid &&
    postalInputIsValid &&
    cityInputIsValid
  ) {
    allFormIsValid = true;
  }

  const cancelOrderHandler = () => {
    props.onShowForm(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      !nameInputForm ||
      !streetInputForm ||
      !postalInputForm ||
      !cityInputForm
    ) {
      return;
    }

    const totalPriceAmountToFixed = `${context.totalPriceAmount.toFixed(2)}`;

    const orders = {
      id: uuidV4,
      name: nameInputForm,
      amount: context.items,
      totalAmount: totalPriceAmountToFixed,
      address: {
        street: streetInputForm,
        postal: postalInputForm,
        city: cityInputForm,
      },
    };

    props.onOrder(orders);

    nameReset();
    streetReset();
    postalReset();
    cityReset();
  };

  const invalidOutput = (invalid, invalidText) => {
    return invalid && <p className="text-xs text-red-600">{invalidText}</p>;
  };

  const forms = [
    {
      id: "name",
      name: "Name",
      onChange: nameInputFormHandler,
      onBlur: nameInputBlurHandler,
      value: nameInputForm,
      invalid: nameInputIsInvalid,
      invalidText: "Name must not be empty!",
    },
    {
      id: "street",
      name: "Street",
      onChange: streetInputFormHandler,
      onBlur: streetInputBlurHandler,
      value: streetInputForm,
      invalid: streetInputIsInvalid,
      invalidText: "Street must not be empty!",
    },
    {
      id: "postal",
      name: "Postal",
      onChange: postalInputFormHandler,
      onBlur: postalInputBlurHandler,
      value: postalInputForm,
      invalid: postalInputIsInvalid,
      invalidText: "Postal must not be empty!",
    },
    {
      id: "city",
      name: "City",
      onChange: cityInputFormHandler,
      onBlur: cityInputBlurHandler,
      value: cityInputForm,
      invalid: cityInputIsInvalid,
      invalidText: "City must not be empty!",
    },
  ];

  const allForms = forms.map((form) => {
    return (
      <div className="flex flex-col gap-1.5" key={form.id}>
        <Form
          children={form.name}
          id={form.id}
          type={"text"}
          onChange={form.onChange}
          onBlur={form.onBlur}
          value={form.value}
          className={"rounded border-none p-1 outline-none ring-1 focus:ring-2"}
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
        disabled={!allFormIsValid}
        className={`py-1 px-4 font-semibold text-white ${
          allFormIsValid
            ? "bg-[#8a2b06] hover:bg-[#4d1601]"
            : "cursor-not-allowed bg-slate-500"
        }`}
      >
        Confirm
      </Button>
    </div>
  );

  return (
    <form onSubmit={formSubmitHandler}>
      {allForms}
      {buttonForm}
    </form>
  );
};

export default CartForm;
