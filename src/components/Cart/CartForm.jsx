import React from "react";

import Form from "../UI/Form";
import Button from "../UI/Button";
import useForm from "../hooks/use-form";

const validateInput = (value) => value.trim() !== "";

const CartForm = (props) => {
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

    nameReset();
    streetReset();
    postalReset();
    cityReset();
  };

  const invalidOutput = (invalid, invalidText) => {
    return invalid && <p className="text-xs text-red-600">{invalidText}</p>;
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="flex flex-col gap-1.5">
        <Form
          children={"Name"}
          id={"name"}
          type={"text"}
          onChange={nameInputFormHandler}
          onBlur={nameInputBlurHandler}
          value={nameInputForm}
          className={"rounded border-none p-1 outline-none ring-1 focus:ring-2"}
        />
        {invalidOutput(nameInputIsInvalid, "Name must not be empty!")}
      </div>
      <div className="flex flex-col gap-1.5">
        <Form
          children={"Street"}
          id={"street"}
          type={"text"}
          onChange={streetInputFormHandler}
          onBlur={streetInputBlurHandler}
          value={streetInputForm}
          className={"rounded border-none p-1 outline-none ring-1 focus:ring-2"}
        />
        {invalidOutput(streetInputIsInvalid, "Street must not be empty!")}
      </div>
      <div className="flex flex-col gap-1.5">
        <Form
          children={"Postal"}
          id={"postal"}
          type={"text"}
          onChange={postalInputFormHandler}
          onBlur={postalInputBlurHandler}
          value={postalInputForm}
          className={"rounded border-none p-1 outline-none ring-1 focus:ring-2"}
        />
        {invalidOutput(postalInputIsInvalid, "Postal must not be empty!")}
      </div>
      <div className="flex flex-col gap-1.5">
        <Form
          children={"City"}
          id={"city"}
          type={"text"}
          onChange={cityInputFormHandler}
          onBlur={cityInputBlurHandler}
          value={cityInputForm}
          className={"rounded border-none p-1 outline-none ring-1 focus:ring-2"}
        />
        {invalidOutput(cityInputIsInvalid, "City must not be empty!")}
      </div>
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
    </form>
  );
};

export default CartForm;
