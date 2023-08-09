import React, { useContext } from "react";
import classes from "./Cart.module.css";
import { Modal } from "../UI/Modal/Modal";
import { CartItem } from "./CartItem";
import CartContext from "../../store/cart-context";
export const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalPrice = `$${cartCtx.totalAmount.toFixed(2)}`;
  const onRemove = (id) => {
    cartCtx.removeItem(id);
  };
  const onAdd = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const items = cartCtx.items.map((item) => (
    <CartItem
      meal={item}
      onAdd={onAdd.bind(null, item)}
      onRemove={onRemove.bind(null, item.id)}
    />
  ));
  const hasItem = cartCtx.items.length > 0;

  return (
    <Modal onClose={props.hideCartHandler}>
      <ul className={classes["cart-items"]}> {items}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.closeBtn} onClick={props.hideCartHandler}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
