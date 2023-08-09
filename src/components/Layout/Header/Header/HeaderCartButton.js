import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../../../store/cart-context";

export const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx?.items.reduce((currentNum, item) => {
    return currentNum + +item.amount;
  }, 0);

  return (
    <button className={classes["cart-button"]} onClick={onClick}>
      <span>Your Cart</span>
      <span> {numberOfCartItems}</span>
    </button>
  );
};
