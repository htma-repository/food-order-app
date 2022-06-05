import React, { Fragment, useRef, useState } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const MealItemForm = ({ id, onAddAmountToCart }) => {
  const [cartIsValid, setCartIsValid] = useState(false);
  const amountInputRef = useRef();

  const cartSubmitHandler = (e) => {
    e.preventDefault();

    let enteredAmount = amountInputRef.current.value;
    const enteredAmountToNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountToNumber < 1 ||
      enteredAmountToNumber > 10
    ) {
      return setCartIsValid(true);
    }

    onAddAmountToCart(enteredAmountToNumber);
    amountInputRef.current.value = "";
  };

  return (
    <Fragment>
      <form
        action="submit"
        className="flex flex-col items-center gap-y-4 md:gap-y-3"
        onSubmit={cartSubmitHandler}
      >
        <Input
          ref={amountInputRef}
          label={"Amount :"}
          input={{
            id: `amount_${id}`,
            type: "number",
            min: "1",
            max: "10",
            defaultValue: "1",
            className: "w-12 rounded-sm p-0.5 ring-1",
          }}
        />
        <Button
          className={
            "self-end bg-[#8a2b06] py-1 px-4 text-sm text-white hover:bg-[#4d1601] md:self-center"
          }
        >
          + Add
        </Button>
        {cartIsValid && (
          <p className="text-xs text-red-600">Please input valid Amount 1-10</p>
        )}
      </form>
    </Fragment>
  );
};

export default MealItemForm;
