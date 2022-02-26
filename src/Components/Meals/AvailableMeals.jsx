import React from "react";

import Card from "../UI/Card";
import DUMMY_MEALS from "../Meals/DummyMeals";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const listMeals = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        desc={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <Card className={`mx-4 my-4 bg-white lg:mx-auto lg:w-2/3`}>
      <ul>{listMeals}</ul>
    </Card>
  );
};

export default AvailableMeals;
