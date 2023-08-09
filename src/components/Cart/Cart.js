import React from "react";
import classes from "./Cart.module.css";
import { Modal } from "../UI/Modal/Modal";
export const Cart = (props) => {
  return (
    <Modal onClose={props.hideCartHandler}>
      item{" "}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>50$</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.closeBtn} onClick={props.hideCartHandler}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
