import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(
          "https://food-order-app-c0891-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
        )
        .then((response) => {
          const data = response.data;

          const mealsData = [];
          for (const key in data) {
            mealsData.push({
              id: key,
              ...data[key],
            });
          }
          setMeals(mealsData);
        })
        .catch((error) => {
          setError(error.message);
        });
      setIsLoading(false);
    }, 1000);
  }, []);

  const listMeals = meals.map((meal) => {
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

  const content = isLoading ? (
    <p className="text-center text-xl font-bold text-red-700">Loading...</p>
  ) : error ? (
    <p className="text-center text-xl font-bold text-red-700">{error}</p>
  ) : (
    listMeals
  );

  return (
    <Card className={`mx-4 my-4 bg-white lg:mx-auto lg:w-2/3`}>
      <ul>{content}</ul>
    </Card>
  );
};

export default AvailableMeals;
