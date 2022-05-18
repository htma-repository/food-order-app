import React, { Fragment } from "react";

import SummaryMeals from "./SummaryMeals";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <SummaryMeals />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
