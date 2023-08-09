import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import { MealForm } from "./MealForm";
import CartContext from "../../../store/cart-context";

export const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  const onAddToCart = (amount) => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      price: +meal.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h1>{meal.name}</h1>
        <div className={classes.price}>{`${meal.price.toFixed(2)} $`}</div>
      </div>
      <div>
        <MealForm onAddToCart={onAddToCart} />
      </div>
    </li>
  );
};
