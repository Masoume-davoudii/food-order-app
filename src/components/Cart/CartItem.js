import React from "react";
import classes from "./CartItem.module.css";
export const CartItem = ({ meal, onAdd, onRemove }) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.price}>
          {`${meal.price.toFixed(2)} $`} <span>{`x${meal.amount}`}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onAdd}>+</button>
        <button onClick={onRemove}>-</button>
      </div>
    </li>
  );
};
