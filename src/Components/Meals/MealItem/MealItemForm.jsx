import React, { Fragment, useState } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const MealItemForm = ({ id }) => {
  const [amount, setAmount] = useState("0");

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  console.log(`${id} & ${amount}`);
  return (
    <Fragment>
      <form
        action="submit"
        className="flex flex-col items-center gap-y-4 md:gap-y-3"
      >
        <Input
          label={"Amount :"}
          onChange={amountChangeHandler}
          value={amount}
          input={{
            id: `amount_${id}`,
            type: "number",
            min: "0",
            max: "10",
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
      </form>
    </Fragment>
  );
};

export default MealItemForm;
