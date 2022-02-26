import React from "react";

import Card from "../UI/Card";

const SummaryMeals = () => {
  return (
    <Card
      className={`relative mx-4 -mt-32 flex flex-col gap-y-2 bg-[#383838] p-4 text-center text-white md:mx-auto md:max-w-2xl lg:-mt-40 lg:w-[90%]`}
    >
      <h1 className="text-lg font-semibold md:text-xl">
        Delicious Food Delivered To You
      </h1>
      <p className="text-center text-sm">
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className="text-center text-sm">
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Card>
  );
};

export default SummaryMeals;
