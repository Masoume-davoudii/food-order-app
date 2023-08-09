import React, { useState } from "react";
import classes from "./AvailableMeals.module.css";
import { MealItem } from "./MealItem/MealItem";
import { Card } from "../UI/Card/Card";

const MEALS = [
  {
    id: "1e",
    name: "Pizza",
    price: 10,
  },
  {
    id: "2e",
    name: "Kebab",
    price: 12,
  },
  {
    id: "3e",
    name: "Burger",
    price: 5,
  },
];
export const AvailableMeals = () => {
  const [meals, setMeals] = useState(MEALS);
  const mealList = meals.map((item) => (
    <li>
      <MealItem meal={item} />
    </li>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
